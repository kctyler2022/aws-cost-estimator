# AWS Cost Estimator Widget and Extension

This project aims to develop a Chrome extension and web widget that utilizes AI to provide real-time cost estimates and optimization recommendations for AWS services.

## Purpose

This application will empower users to:

* **Gain accurate and immediate cost estimates:** Users can input their AWS resource configurations (e.g., instance types, storage sizes) and receive cost estimates based on real-time pricing data.
* **Benefit from personalized cost optimization advice:** Employing a large language model (LLM), the app will analyze user input and suggest cost-saving strategies like rightsizing instances and utilizing cheaper services.
* **Ask questions about AWS services naturally:** Users can pose questions in plain language regarding AWS services, pricing, and best practices, and receive informative answers from the LLM.

## Technology Stack

* **Programming Language:** Python
* **Backend:** AWS Lambda
* **API Gateway:**  For exposing backend functionality to the widget and extension
* **Database:** Datastax Astra DB (NoSQL database)
* **AI Framework:** LangChain (for integrating LLM and database)
* **LLM:** OpenAI GPT-3 (or another suitable LLM)

## Platform

* Chrome Extension
* Web Widget

## Getting Started

This project requires familiarity with Python, AWS services, and basic knowledge of AI concepts. 

Here are some initial steps to get started:

1. **Set up AWS account:** Create an AWS account if you don't have one already.
2. **Install Python and Libraries:** Install Python 3.x and required libraries like `requests` (for API calls), `boto3` (AWS SDK for Python), and the LangChain library.
3. **Obtain LLM API Keys:** Acquire API keys for your chosen LLM (e.g., OpenAI GPT-3).
4. **Clone the Project Repository (if applicable):** If you're using a version control system like Git, clone the project repository to your local machine.

## Additional Notes

* This README is a starting point, and detailed instructions will be added as development progresses.
* Specific libraries and configurations will be documented in the code itself.
* Security considerations, such as user authentication and data encryption, will be addressed during development.

This project aims to provide a user-friendly and intelligent tool for AWS cost management. Feel free to contribute to this project by submitting issues, suggesting features, or participating in the development process.
