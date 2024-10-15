import logging
from flask import Flask, jsonify
import requests
import os
from dotenv import load_dotenv
import json

load_dotenv()

app = Flask(__name__)

# Set up logging
logging.basicConfig(level=logging.DEBUG)

bearer_token = os.getenv("BEARER_TOKEN")
print(f"Bearer Token: {bearer_token}")
def bearer_oauth(r):
    r.headers["Authorization"] = f"Bearer {bearer_token}"
    r.headers["User-Agent"] = "v2FilteredStreamPython"
    return r

def get_rules():
    response = requests.get(
        "https://api.twitter.com/2/tweets/search/stream/rules", auth=bearer_oauth
    )
    if response.status_code != 200:
        logging.error(f"Cannot get rules (HTTP {response.status_code}): {response.text}")
        raise Exception("Cannot get rules")
    return response.json()

def delete_all_rules(rules):
    if rules is None or "data" not in rules:
        return None

    ids = list(map(lambda rule: rule["id"], rules["data"]))
    payload = {"delete": {"ids": ids}}
    response = requests.post(
        "https://api.twitter.com/2/tweets/search/stream/rules",
        auth=bearer_oauth,
        json=payload
    )
    if response.status_code != 200:
        logging.error(f"Cannot delete rules (HTTP {response.status_code}): {response.text}")
        raise Exception("Cannot delete rules")
    return response.json()

def set_rules():
    sample_rules = [
        {"value": "disaster", "tag": "disaster-related tweets"}
    ]
    payload = {"add": sample_rules}
    response = requests.post(
        "https://api.twitter.com/2/tweets/search/stream/rules",
        auth=bearer_oauth,
        json=payload,
    )
    if response.status_code != 201:
        logging.error(f"Cannot add rules (HTTP {response.status_code}): {response.text}")
        raise Exception("Cannot add rules")
    return response.json()

def get_stream():
    response = requests.get(
        "https://api.twitter.com/2/tweets/search/stream", auth=bearer_oauth, stream=True,
    )
    if response.status_code != 200:
        logging.error(f"Cannot get stream (HTTP {response.status_code}): {response.text}")
        raise Exception("Cannot get stream")
    
    tweets = []
    for response_line in response.iter_lines():
        if response_line:
            json_response = json.loads(response_line)
            tweets.append(json_response)
            if len(tweets) >= 10:  # Limit to the last 10 tweets
                break
    return tweets

@app.route('/tweets', methods=['GET'])
def get_tweets():
    try:
        rules = get_rules()
        delete_all_rules(rules)
        set_rules()
        tweets = get_stream()
        
        formatted_tweets = [{"id": tweet["data"]["id"], "text": tweet["data"]["text"]} for tweet in tweets if "data" in tweet]
        
        return jsonify(formatted_tweets)
    
    except Exception as e:
        logging.error(f"Error in get_tweets: {str(e)}")
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
