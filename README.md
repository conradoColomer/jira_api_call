# Jira API Call

- **🚀About me**:
Hi, I’m Conrado!!
I'm from Argentina ⭐️⭐️⭐️ 

A bit about me personally:

❤️ I’m passionate about API testing and mobile automation for Android and iOS.
⚡ Fun fact: I work with Java and Python, and I love diving into automation challenges.
🔭 I’m currently mastering QA Engineering, specializing in automation and software testing.
🌱 Continuously learning and growing in the tech space.
📫 How to reach me...
- [![LinkedIn](https://img.shields.io/badge/LinkedIn-blue?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/conrado-mendez-colomer-454b221b1/)


## Configuration

Before using the script, you need to replace the following placeholder values with your own information:

### Jira Domain

- **Placeholder**: `my_company.atlassian.net`
- **Description**: Replace `my_company` with the subdomain of your Jira instance.
- **Example**:
  ```javascript
  var jiraDomain = "my_company.atlassian.net"; // Replace 'my_company' with your Jira subdomain

### Email and API Token
- **Placeholder**:your_company_email and your_api_token
- **Description**:Replace your_company_email with your Jira account email and your_api_token with your Jira API token. You can generate an API token from your Jira account settings.
- **Example**:
  ```javascript
  var email = "your_company_email"; // Replace with your Jira account email
  var apiToken = "your_api_token"; // Replace with your Jira API token

### Jira Link Validation
- **Placeholder**:https://my_company.atlassian.net/browse/
- **Description**:Replace my_company with your Jira subdomain to correctly validate Jira issue links in the spreadsheet.
- **Example**:
 ```javascript
 
if (!jiraLink || !jiraLink.includes("https://my_company.atlassian.net/browse/")) { // Replace 'my_company' with your Jira subdomain
  Logger.log("No valid Jira link found in the cell");
  return;
}
