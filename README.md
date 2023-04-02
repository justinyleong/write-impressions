# Write Impressions - MLHacks 2023
A Chat-GPT powered extension to perfect your tone in emails, messages, and more!

## Inspiration
Due to the current state of the job market, it is more difficult than ever to secure internships and jobs. Over 80% of jobs are found online, and the average office worker receives more than 120 emails each day. Thus, it is important for job-seekers to make a good first impression through online communication. To help those struggling with writing emails or messages, we have developed Write Impressions.

## What it does
Write Impressions is a Chat-GPT powered extension that can transform any selected text into the tone that you want, from professional to casual. 

## How we built it
Using the newly released chat-gpt api, we combined this functionality right into the browser with javascript, creating a browser extension that is seamlessly integrated for the user.

## Challenges we ran into
To use this newly created chat-gpt api, we had to use documentation that is relatively new, meaning the possibility of errors and lack of ease of understanding was high. In addition, we were developing in the firefox browser, which does not use the chromium-based API that chrome supports, meaning that the information was often outdated and not constantly updated.

## Accomplishments that we're proud of
We were able to integrate this newly created AI product into a browser extension that anyone can use! It was also our first time creating a firefox extension and using external APIs. In addition, we had to quickly learn all these new technologies within the given time span on top of our daily schedules.

## What we learned
We learned how to develop extensions in the firefox browser using javascript and connect them with external APIs. To do this, we read MDN docs and Open AI’s documentation on chat-gpt. We learned to process requests with fetch API and parse the JSON response to receive the content. Since we are relatively new to these softwares, we spent a lot of time troubleshooting and watching tutorials, and this difficult process helped us learn a lot in general.

## What's next for Write Impressions
We are currently creating a Chrome extension for Write Impressions, and we hope to expand to other platforms as well so that more people can use it in multiple settings. We also hope to implement customizable prompts and more advanced AI suggestion algorithms that analyze the selected text for emotions, incorporating context into the output.