$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/login.feature");
formatter.feature({
  "name": "To validate login functionality of fb application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "To validate login with invalid username and password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@confidence"
    }
  ]
});
formatter.step({
  "name": "user should enter invalid \"\u003cusername\u003e\" and \"\u003cinvalid password\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user should click login button",
  "keyword": "And "
});
formatter.step({
  "name": "user will navigate to invalid credential page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "ana@123",
        "ana"
      ]
    },
    {
      "cells": [
        "anand@123",
        "anand"
      ]
    },
    {
      "cells": [
        "Java@123",
        "java"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user need to be in login page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition1.user_need_to_be_in_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate login with invalid username and password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@confidence"
    }
  ]
});
formatter.step({
  "name": "user should enter invalid \"ana@123\" and \"\u003cinvalid password\u003e\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition1.user_should_enter_invalid_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition1.user_should_click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will navigate to invalid credential page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition1.user_will_navigate_to_invalid_credential_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user need to be in login page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition1.user_need_to_be_in_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate login with invalid username and password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@confidence"
    }
  ]
});
formatter.step({
  "name": "user should enter invalid \"anand@123\" and \"\u003cinvalid password\u003e\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition1.user_should_enter_invalid_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition1.user_should_click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will navigate to invalid credential page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition1.user_will_navigate_to_invalid_credential_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user need to be in login page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition1.user_need_to_be_in_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate login with invalid username and password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@confidence"
    }
  ]
});
formatter.step({
  "name": "user should enter invalid \"Java@123\" and \"\u003cinvalid password\u003e\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition1.user_should_enter_invalid_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition1.user_should_click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will navigate to invalid credential page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition1.user_will_navigate_to_invalid_credential_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/Features/product.feature");
formatter.feature({
  "name": "To validate search funtionality of flipkart application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "To  validate searchbox with product name",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@confidence"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user needs to be in flipkart homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefenitons3.user_needs_to_be_in_flipkart_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should enter product name in searchbox",
  "rows": [
    {
      "cells": [
        "product",
        "New product"
      ]
    },
    {
      "cells": [
        "iphone",
        "mac laptop"
      ]
    },
    {
      "cells": [
        "smart watch",
        "tshirt"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "StepDefenitons3.user_should_enter_product_name_in_searchbo(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click search button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefenitons3.user_should_click_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will navigaye to products page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefenitons3.user_will_navigaye_to_products_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});