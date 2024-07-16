# jira_api_call

# Configuration

Before using the script, you need to replace the following placeholder values with your own information:

# Jira Domain:

Placeholder: my_company.atlassian.net
Description: Replace my_company with the subdomain of your Jira instance.
 
var jiraDomain = "my_company.atlassian.net"; // Replace 'my_company' with your Jira subdomain


# Email and API Token:

Placeholders: your_company_email and your_api_token
Description: Replace your_company_email with your Jira account email and your_api_token with your Jira API token. You can generate an API token from your Jira account settings.
Example:

var email = "your_company_email"; // Replace with your Jira account email
var apiToken = "your_api_token"; // Replace with your Jira API token

# Jira Link Validation:

Placeholder: https://my_company.net/browse/
Description: Replace my_company with your Jira subdomain to correctly validate Jira issue links in the spreadsheet.
Example:

if (!jiraLink || !jiraLink.includes("https://my_company.atlassian.net/browse/")) { // Replace 'my_company' with your Jira subdomain
  Logger.log("No valid Jira link found in the cell");
  return;
}
