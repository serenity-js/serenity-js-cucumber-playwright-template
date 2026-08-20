window.__SERENITY_REPORT_DATA__ = {
  "schemaVersion": 1,
  "summary": {
    "title": "Cucumber",
    "totalScenarios": 1,
    "outcomes": {
      "passed": 1,
      "failed": 0,
      "pending": 0,
      "skipped": 0,
      "compromised": 0,
      "error": 0
    },
    "duration": 2408,
    "startedAt": "2026-08-20T11:08:37.226Z",
    "finishedAt": "2026-08-20T11:08:39.634Z",
    "testRunner": "Cucumber"
  },
  "scenarios": [
    {
      "name": "Using username and password to log in",
      "category": "Form-based authentication",
      "outcome": "SUCCESS",
      "duration": 2408,
      "startedAt": "2026-08-20T11:08:37.226Z",
      "source": {
        "path": "/__w/serenity-js-cucumber-playwright-template/serenity-js-cucumber-playwright-template/features/authentication/form-based_authentication.feature",
        "line": 24
      },
      "tags": [
        {
          "type": "capability",
          "name": "Authentication"
        },
        {
          "type": "feature",
          "name": "Form-based authentication"
        },
        {
          "type": "module",
          "name": "serenity-js-cucumber-playwright-template"
        }
      ],
      "activities": [],
      "executionHistory": [
        {
          "outcome": "SUCCESS",
          "run": "2128",
          "timestamp": "2026-08-20T11:08:37.226Z",
          "duration": 2408,
          "activities": []
        }
      ],
      "narrative": "<p>In order to learn how to use Serenity/JS with Cucumber and Playwright\nAs a Curious Developer\nI&#39;d like to see an example</p>\n",
      "description": "<p><a href=\"https://the-internet.herokuapp.com/\">&quot;The Internet&quot;</a> is an example application\nthat captures prominent and ugly functionality found on the web.\nPerfect for writing automated acceptance tests against 😎\nWith <strong>Serenity/JS</strong> you can use <a href=\"https://en.wikipedia.org/wiki/Markdown\">Markdown</a>\nto better describe each <code>Feature</code> and <code>Scenario</code>.</p>\n",
      "cast": [
        {
          "name": "Alice",
          "abilities": [
            {
              "name": "PerformActivities"
            },
            {
              "name": "AnswerQuestions"
            },
            {
              "name": "RaiseErrors"
            },
            {
              "name": "ScheduleWork",
              "details": "{\"scheduler\":{\"clock\":{\"timeAdjustment\":{\"milliseconds\":0}},\"interactionTimeout\":{\"milliseconds\":5000}}}"
            },
            {
              "name": "BrowseTheWebWithPlaywright"
            },
            {
              "name": "CallAnApi",
              "details": "{\"baseURL\":\"https://the-internet.herokuapp.com/\",\"headers\":{\"common\":{\"Accept\":\"application/json, text/plain, */*\"}},\"timeout\":10000}"
            },
            {
              "name": "TakeNotes",
              "details": "{\"notepad\":{}}"
            }
          ]
        }
      ],
      "scenarioOutline": {
        "template": "When she logs in using \"<username>\" and \"<password>\"\nThen she should see that authentication has <outcome>",
        "parameters": [
          {
            "name": "",
            "values": {
              "username": "tomsmith",
              "password": "SuperSecretPassword!",
              "outcome": "succeeded"
            },
            "outcome": "SUCCESS",
            "duration": 1250,
            "activities": [
              {
                "name": "Given Alice starts with the \"Form Authentication\" example",
                "outcome": "SUCCESS",
                "duration": 901,
                "children": [
                  {
                    "name": "Alice navigates to \"/\"",
                    "outcome": "SUCCESS",
                    "duration": 583,
                    "children": [],
                    "type": "Interaction",
                    "startedAt": "2026-08-20T11:08:35.989Z",
                    "location": {
                      "path": "/__w/serenity-js-cucumber-playwright-template/serenity-js-cucumber-playwright-template/features/step-definitions/the-internet.steps.ts",
                      "line": 16,
                      "column": 18
                    }
                  },
                  {
                    "name": "Alice picks example called Form Authentication",
                    "outcome": "SUCCESS",
                    "duration": 282,
                    "children": [
                      {
                        "name": "Alice clicks on the first of available examples where Text does equal \"Form Authentication\"",
                        "outcome": "SUCCESS",
                        "duration": 272,
                        "children": [],
                        "type": "Interaction",
                        "startedAt": "2026-08-20T11:08:36.583Z",
                        "location": {
                          "path": "/__w/serenity-js-cucumber-playwright-template/serenity-js-cucumber-playwright-template/test/examples/PickExample.ts",
                          "line": 12,
                          "column": 19
                        }
                      }
                    ],
                    "type": "Task",
                    "startedAt": "2026-08-20T11:08:36.583Z",
                    "location": {
                      "path": "/__w/serenity-js-cucumber-playwright-template/serenity-js-cucumber-playwright-template/features/step-definitions/the-internet.steps.ts",
                      "line": 17,
                      "column": 21
                    }
                  }
                ],
                "type": "Task",
                "startedAt": "2026-08-20T11:08:35.974Z",
                "location": {
                  "path": "/__w/serenity-js-cucumber-playwright-template/serenity-js-cucumber-playwright-template/features/authentication/form-based_authentication.feature",
                  "line": 8
                }
              },
              {
                "name": "When she logs in using \"tomsmith\" and \"SuperSecretPassword!\"",
                "outcome": "SUCCESS",
                "duration": 243,
                "children": [
                  {
                    "name": "Alice logs in as tomsmith",
                    "outcome": "SUCCESS",
                    "duration": 224,
                    "children": [
                      {
                        "name": "Alice enters \"tomsmith\" into username field",
                        "outcome": "SUCCESS",
                        "duration": 18,
                        "children": [],
                        "type": "Interaction",
                        "startedAt": "2026-08-20T11:08:36.884Z",
                        "location": {
                          "path": "/__w/serenity-js-cucumber-playwright-template/serenity-js-cucumber-playwright-template/test/authentication/Authenticate.ts",
                          "line": 18,
                          "column": 38
                        }
                      },
                      {
                        "name": "Alice enters \"SuperSecretPassword!\" into password field",
                        "outcome": "SUCCESS",
                        "duration": 5,
                        "children": [],
                        "type": "Interaction",
                        "startedAt": "2026-08-20T11:08:36.912Z",
                        "location": {
                          "path": "/__w/serenity-js-cucumber-playwright-template/serenity-js-cucumber-playwright-template/test/authentication/Authenticate.ts",
                          "line": 19,
                          "column": 38
                        }
                      },
                      {
                        "name": "Alice clicks on login button",
                        "outcome": "SUCCESS",
                        "duration": 169,
                        "children": [],
                        "type": "Interaction",
                        "startedAt": "2026-08-20T11:08:36.928Z",
                        "location": {
                          "path": "/__w/serenity-js-cucumber-playwright-template/serenity-js-cucumber-playwright-template/test/authentication/Authenticate.ts",
                          "line": 20,
                          "column": 19
                        }
                      }
                    ],
                    "type": "Task",
                    "startedAt": "2026-08-20T11:08:36.884Z",
                    "location": {
                      "path": "/__w/serenity-js-cucumber-playwright-template/serenity-js-cucumber-playwright-template/features/step-definitions/the-internet.steps.ts",
                      "line": 23,
                      "column": 22
                    }
                  }
                ],
                "type": "Task",
                "startedAt": "2026-08-20T11:08:36.876Z",
                "location": {
                  "path": "/__w/serenity-js-cucumber-playwright-template/serenity-js-cucumber-playwright-template/features/authentication/form-based_authentication.feature",
                  "line": 18
                }
              },
              {
                "name": "Then she should see that authentication has succeeded",
                "outcome": "SUCCESS",
                "duration": 81,
                "children": [
                  {
                    "name": "Alice verifies that authentication has succeeded",
                    "outcome": "SUCCESS",
                    "duration": 65,
                    "children": [
                      {
                        "name": "Alice verifies that flash alert is present",
                        "outcome": "SUCCESS",
                        "duration": 43,
                        "children": [
                          {
                            "name": "Alice ensures that flash message does become visible",
                            "outcome": "SUCCESS",
                            "duration": 32,
                            "children": [],
                            "type": "Interaction",
                            "startedAt": "2026-08-20T11:08:37.125Z",
                            "location": {
                              "path": "/__w/serenity-js-cucumber-playwright-template/serenity-js-cucumber-playwright-template/features/step-definitions/the-internet.steps.ts",
                              "line": 36,
                              "column": 46
                            }
                          }
                        ],
                        "type": "Task",
                        "startedAt": "2026-08-20T11:08:37.125Z",
                        "location": {
                          "path": "/__w/serenity-js-cucumber-playwright-template/serenity-js-cucumber-playwright-template/test/authentication/VerifyAuthentication.ts",
                          "line": 21,
                          "column": 34
                        }
                      },
                      {
                        "name": "Alice ensures that the text of flash message does include \"You logged into a secure area!\"",
                        "outcome": "SUCCESS",
                        "duration": 2,
                        "children": [],
                        "type": "Interaction",
                        "startedAt": "2026-08-20T11:08:37.178Z",
                        "location": {
                          "path": "/__w/serenity-js-cucumber-playwright-template/serenity-js-cucumber-playwright-template/features/step-definitions/the-internet.steps.ts",
                          "line": 36,
                          "column": 46
                        }
                      }
                    ],
                    "type": "Task",
                    "startedAt": "2026-08-20T11:08:37.125Z",
                    "location": {
                      "path": "/__w/serenity-js-cucumber-playwright-template/serenity-js-cucumber-playwright-template/features/step-definitions/the-internet.steps.ts",
                      "line": 36,
                      "column": 46
                    }
                  }
                ],
                "type": "Task",
                "startedAt": "2026-08-20T11:08:37.119Z",
                "location": {
                  "path": "/__w/serenity-js-cucumber-playwright-template/serenity-js-cucumber-playwright-template/features/authentication/form-based_authentication.feature",
                  "line": 19
                }
              }
            ]
          },
          {
            "name": "",
            "values": {
              "username": "foobar",
              "password": "barfoo",
              "outcome": "failed"
            },
            "outcome": "SUCCESS",
            "duration": 1158,
            "activities": [
              {
                "name": "Given Alice starts with the \"Form Authentication\" example",
                "outcome": "SUCCESS",
                "duration": 814,
                "children": [
                  {
                    "name": "Alice navigates to \"/\"",
                    "outcome": "SUCCESS",
                    "duration": 513,
                    "children": [],
                    "type": "Interaction",
                    "startedAt": "2026-08-20T11:08:37.231Z",
                    "location": {
                      "path": "/__w/serenity-js-cucumber-playwright-template/serenity-js-cucumber-playwright-template/features/step-definitions/the-internet.steps.ts",
                      "line": 16,
                      "column": 18
                    }
                  },
                  {
                    "name": "Alice picks example called Form Authentication",
                    "outcome": "SUCCESS",
                    "duration": 274,
                    "children": [
                      {
                        "name": "Alice clicks on the first of available examples where Text does equal \"Form Authentication\"",
                        "outcome": "SUCCESS",
                        "duration": 264,
                        "children": [],
                        "type": "Interaction",
                        "startedAt": "2026-08-20T11:08:37.755Z",
                        "location": {
                          "path": "/__w/serenity-js-cucumber-playwright-template/serenity-js-cucumber-playwright-template/test/examples/PickExample.ts",
                          "line": 12,
                          "column": 19
                        }
                      }
                    ],
                    "type": "Task",
                    "startedAt": "2026-08-20T11:08:37.755Z",
                    "location": {
                      "path": "/__w/serenity-js-cucumber-playwright-template/serenity-js-cucumber-playwright-template/features/step-definitions/the-internet.steps.ts",
                      "line": 17,
                      "column": 21
                    }
                  }
                ],
                "type": "Task",
                "startedAt": "2026-08-20T11:08:37.226Z",
                "location": {
                  "path": "/__w/serenity-js-cucumber-playwright-template/serenity-js-cucumber-playwright-template/features/authentication/form-based_authentication.feature",
                  "line": 8
                }
              },
              {
                "name": "When she logs in using \"foobar\" and \"barfoo\"",
                "outcome": "SUCCESS",
                "duration": 244,
                "children": [
                  {
                    "name": "Alice logs in as foobar",
                    "outcome": "SUCCESS",
                    "duration": 227,
                    "children": [
                      {
                        "name": "Alice enters \"foobar\" into username field",
                        "outcome": "SUCCESS",
                        "duration": 16,
                        "children": [],
                        "type": "Interaction",
                        "startedAt": "2026-08-20T11:08:38.046Z",
                        "location": {
                          "path": "/__w/serenity-js-cucumber-playwright-template/serenity-js-cucumber-playwright-template/test/authentication/Authenticate.ts",
                          "line": 18,
                          "column": 38
                        }
                      },
                      {
                        "name": "Alice enters \"barfoo\" into password field",
                        "outcome": "SUCCESS",
                        "duration": 4,
                        "children": [],
                        "type": "Interaction",
                        "startedAt": "2026-08-20T11:08:38.072Z",
                        "location": {
                          "path": "/__w/serenity-js-cucumber-playwright-template/serenity-js-cucumber-playwright-template/test/authentication/Authenticate.ts",
                          "line": 19,
                          "column": 38
                        }
                      },
                      {
                        "name": "Alice clicks on login button",
                        "outcome": "SUCCESS",
                        "duration": 176,
                        "children": [],
                        "type": "Interaction",
                        "startedAt": "2026-08-20T11:08:38.087Z",
                        "location": {
                          "path": "/__w/serenity-js-cucumber-playwright-template/serenity-js-cucumber-playwright-template/test/authentication/Authenticate.ts",
                          "line": 20,
                          "column": 19
                        }
                      }
                    ],
                    "type": "Task",
                    "startedAt": "2026-08-20T11:08:38.046Z",
                    "location": {
                      "path": "/__w/serenity-js-cucumber-playwright-template/serenity-js-cucumber-playwright-template/features/step-definitions/the-internet.steps.ts",
                      "line": 23,
                      "column": 22
                    }
                  }
                ],
                "type": "Task",
                "startedAt": "2026-08-20T11:08:38.040Z",
                "location": {
                  "path": "/__w/serenity-js-cucumber-playwright-template/serenity-js-cucumber-playwright-template/features/authentication/form-based_authentication.feature",
                  "line": 18
                }
              },
              {
                "name": "Then she should see that authentication has failed",
                "outcome": "SUCCESS",
                "duration": 79,
                "children": [
                  {
                    "name": "Alice verifies that authentication has failed",
                    "outcome": "SUCCESS",
                    "duration": 63,
                    "children": [
                      {
                        "name": "Alice verifies that flash alert is present",
                        "outcome": "SUCCESS",
                        "duration": 40,
                        "children": [
                          {
                            "name": "Alice ensures that flash message does become visible",
                            "outcome": "SUCCESS",
                            "duration": 30,
                            "children": [],
                            "type": "Interaction",
                            "startedAt": "2026-08-20T11:08:38.289Z",
                            "location": {
                              "path": "/__w/serenity-js-cucumber-playwright-template/serenity-js-cucumber-playwright-template/features/step-definitions/the-internet.steps.ts",
                              "line": 36,
                              "column": 46
                            }
                          }
                        ],
                        "type": "Task",
                        "startedAt": "2026-08-20T11:08:38.289Z",
                        "location": {
                          "path": "/__w/serenity-js-cucumber-playwright-template/serenity-js-cucumber-playwright-template/test/authentication/VerifyAuthentication.ts",
                          "line": 27,
                          "column": 34
                        }
                      },
                      {
                        "name": "Alice ensures that the text of flash message does include \"Your username is invalid!\"",
                        "outcome": "SUCCESS",
                        "duration": 2,
                        "children": [],
                        "type": "Interaction",
                        "startedAt": "2026-08-20T11:08:38.340Z",
                        "location": {
                          "path": "/__w/serenity-js-cucumber-playwright-template/serenity-js-cucumber-playwright-template/features/step-definitions/the-internet.steps.ts",
                          "line": 36,
                          "column": 46
                        }
                      }
                    ],
                    "type": "Task",
                    "startedAt": "2026-08-20T11:08:38.289Z",
                    "location": {
                      "path": "/__w/serenity-js-cucumber-playwright-template/serenity-js-cucumber-playwright-template/features/step-definitions/the-internet.steps.ts",
                      "line": 36,
                      "column": 46
                    }
                  }
                ],
                "type": "Task",
                "startedAt": "2026-08-20T11:08:38.284Z",
                "location": {
                  "path": "/__w/serenity-js-cucumber-playwright-template/serenity-js-cucumber-playwright-template/features/authentication/form-based_authentication.feature",
                  "line": 19
                }
              }
            ]
          }
        ]
      }
    }
  ],
  "history": [
    {
      "timestamp": "2026-08-20T11:08:37.226Z",
      "duration": 2408,
      "outcomes": {
        "passed": 1,
        "failed": 0,
        "pending": 0,
        "skipped": 0,
        "compromised": 0,
        "error": 0
      },
      "label": "2128",
      "slowest": 2408,
      "fastest": 2408,
      "average": 2408,
      "commit": "c62f5fd2a5ed3222bdb6d2f021b22326ba2e2517",
      "branch": "main",
      "ciJobUrl": "https://github.com/serenity-js/serenity-js-cucumber-playwright-template/actions/runs/32362237654",
      "repositoryUrl": "https://github.com/serenity-js/serenity-js-cucumber-playwright-template",
      "score": {
        "confidence": 100,
        "passRate": 100,
        "consistency": 100,
        "completeness": 100
      }
    }
  ],
  "tags": [
    {
      "type": "capability",
      "name": "Authentication",
      "scenarioCount": 1,
      "passed": 1,
      "failed": 0,
      "skipped": 0
    },
    {
      "type": "feature",
      "name": "Form-based authentication",
      "scenarioCount": 1,
      "passed": 1,
      "failed": 0,
      "skipped": 0
    },
    {
      "type": "module",
      "name": "serenity-js-cucumber-playwright-template",
      "scenarioCount": 1,
      "passed": 1,
      "failed": 0,
      "skipped": 0
    }
  ],
  "inconsistentTests": [],
  "newFailures": [],
  "newPasses": [],
  "systemContext": {
    "nodeVersion": "v24.19.0",
    "os": {
      "name": "linux",
      "version": "6.17.0-1022-azure",
      "arch": "x64"
    },
    "serenityVersion": "3.45.8",
    "testRunner": {
      "name": "Cucumber",
      "version": "13.2.1"
    },
    "browsers": [],
    "ci": {
      "provider": "GitHub Actions",
      "buildNumber": "2128",
      "branch": "main",
      "commit": "c62f5fd2a5ed3222bdb6d2f021b22326ba2e2517",
      "commitMessage": "Merge pull request #611 from serenity-js/docs/add-documentation-links",
      "commitAuthor": "Jan Molak",
      "jobUrl": "https://github.com/serenity-js/serenity-js-cucumber-playwright-template/actions/runs/32362237654",
      "workflow": "build",
      "repositoryUrl": "https://github.com/serenity-js/serenity-js-cucumber-playwright-template",
      "triggeredBy": "jan-molak"
    },
    "projectName": "serenity-js-cucumber-playwright-template",
    "packageManager": "npm"
  },
  "capabilities": {
    "type": "directory",
    "name": "features",
    "outcomes": {
      "passed": 1,
      "failed": 0,
      "pending": 0,
      "skipped": 0,
      "compromised": 0,
      "error": 0
    },
    "scenarioCount": 1,
    "children": [
      {
        "type": "directory",
        "name": "authentication",
        "outcomes": {
          "passed": 1,
          "failed": 0,
          "pending": 0,
          "skipped": 0,
          "compromised": 0,
          "error": 0
        },
        "scenarioCount": 1,
        "children": [
          {
            "type": "file",
            "name": "form-based_authentication",
            "outcomes": {
              "passed": 1,
              "failed": 0,
              "pending": 0,
              "skipped": 0,
              "compromised": 0,
              "error": 0
            },
            "scenarioCount": 1,
            "scenarios": [
              {
                "name": "Using username and password to log in",
                "outcome": "SUCCESS",
                "executionHistory": [
                  "SUCCESS"
                ]
              }
            ],
            "narrative": "In order to learn how to use Serenity/JS with Cucumber and Playwright\nAs a Curious Developer\nI'd like to see an example",
            "score": {
              "confidence": 100,
              "passRate": 100,
              "completeness": 100,
              "consistency": 100
            }
          }
        ],
        "score": {
          "confidence": 100,
          "passRate": 100,
          "completeness": 100,
          "consistency": 100
        },
        "displayName": "The Internet - Authentication",
        "readme": "<p>Narrative:\nIn order to learn how to implement <em>high-quality automated tests</em>\nAs a Curious Developer\nI&#39;d like to have a place to practice</p>\n<p>This note is called <em>&quot;the narrative&quot;</em>. It can be used to provide the context around the business capability of your\nproduct (&quot;Authentication&quot; features in this case) and its features that help to enable this capability.</p>\n<p><strong>Please note:</strong> While <a href=\"https://github.com/cucumber/cucumber-js\" target=\"_blank\" rel=\"noopener\">Cucumber</a> allows you to capture a description\nof each feature in the <code>.feature</code> file, <a href=\"https://serenity-js.org\" target=\"_blank\" rel=\"noopener\">Serenity/JS</a> allows you to group those <code>.feature</code>\nfiles in directories corresponding to &quot;epics&quot;, &quot;themes&quot; or &quot;business capabilities&quot; of your system and provide\neach one of those with additional context using this <code>narrative.md</code> file.</p>\n<p><strong>By the way:</strong> Did you notice that you can use <strong><a href=\"https://www.markdownguide.org/\" target=\"_blank\" rel=\"noopener\">markdown syntax</a></strong> to better express\nyour thoughts?</p>\n"
      }
    ],
    "score": {
      "confidence": 100,
      "passRate": 100,
      "completeness": 100,
      "consistency": 100
    }
  },
  "specDirectory": "features"
};
