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
    "duration": 2654,
    "startedAt": "2026-08-20T10:51:58.212Z",
    "finishedAt": "2026-08-20T10:52:00.866Z",
    "testRunner": "Cucumber"
  },
  "scenarios": [
    {
      "name": "Using username and password to log in",
      "category": "Form-based authentication",
      "outcome": "SUCCESS",
      "duration": 2654,
      "startedAt": "2026-08-20T10:51:58.212Z",
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
          "run": "2126",
          "timestamp": "2026-08-20T10:51:58.212Z",
          "duration": 2654,
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
            "duration": 1431,
            "activities": [
              {
                "name": "Given Alice starts with the \"Form Authentication\" example",
                "outcome": "SUCCESS",
                "duration": 1040,
                "children": [
                  {
                    "name": "Alice navigates to \"/\"",
                    "outcome": "SUCCESS",
                    "duration": 639,
                    "children": [],
                    "type": "Interaction",
                    "startedAt": "2026-08-20T10:51:56.797Z",
                    "location": {
                      "path": "/__w/serenity-js-cucumber-playwright-template/serenity-js-cucumber-playwright-template/features/step-definitions/the-internet.steps.ts",
                      "line": 16,
                      "column": 18
                    }
                  },
                  {
                    "name": "Alice picks example called Form Authentication",
                    "outcome": "SUCCESS",
                    "duration": 362,
                    "children": [
                      {
                        "name": "Alice clicks on the first of available examples where Text does equal \"Form Authentication\"",
                        "outcome": "SUCCESS",
                        "duration": 351,
                        "children": [],
                        "type": "Interaction",
                        "startedAt": "2026-08-20T10:51:57.448Z",
                        "location": {
                          "path": "/__w/serenity-js-cucumber-playwright-template/serenity-js-cucumber-playwright-template/test/examples/PickExample.ts",
                          "line": 12,
                          "column": 19
                        }
                      }
                    ],
                    "type": "Task",
                    "startedAt": "2026-08-20T10:51:57.447Z",
                    "location": {
                      "path": "/__w/serenity-js-cucumber-playwright-template/serenity-js-cucumber-playwright-template/features/step-definitions/the-internet.steps.ts",
                      "line": 17,
                      "column": 21
                    }
                  }
                ],
                "type": "Task",
                "startedAt": "2026-08-20T10:51:56.780Z",
                "location": {
                  "path": "/__w/serenity-js-cucumber-playwright-template/serenity-js-cucumber-playwright-template/features/authentication/form-based_authentication.feature",
                  "line": 8
                }
              },
              {
                "name": "When she logs in using \"tomsmith\" and \"SuperSecretPassword!\"",
                "outcome": "SUCCESS",
                "duration": 271,
                "children": [
                  {
                    "name": "Alice logs in as tomsmith",
                    "outcome": "SUCCESS",
                    "duration": 253,
                    "children": [
                      {
                        "name": "Alice enters \"tomsmith\" into username field",
                        "outcome": "SUCCESS",
                        "duration": 36,
                        "children": [],
                        "type": "Interaction",
                        "startedAt": "2026-08-20T10:51:57.829Z",
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
                        "startedAt": "2026-08-20T10:51:57.874Z",
                        "location": {
                          "path": "/__w/serenity-js-cucumber-playwright-template/serenity-js-cucumber-playwright-template/test/authentication/Authenticate.ts",
                          "line": 19,
                          "column": 38
                        }
                      },
                      {
                        "name": "Alice clicks on login button",
                        "outcome": "SUCCESS",
                        "duration": 179,
                        "children": [],
                        "type": "Interaction",
                        "startedAt": "2026-08-20T10:51:57.890Z",
                        "location": {
                          "path": "/__w/serenity-js-cucumber-playwright-template/serenity-js-cucumber-playwright-template/test/authentication/Authenticate.ts",
                          "line": 20,
                          "column": 19
                        }
                      }
                    ],
                    "type": "Task",
                    "startedAt": "2026-08-20T10:51:57.828Z",
                    "location": {
                      "path": "/__w/serenity-js-cucumber-playwright-template/serenity-js-cucumber-playwright-template/features/step-definitions/the-internet.steps.ts",
                      "line": 23,
                      "column": 22
                    }
                  }
                ],
                "type": "Task",
                "startedAt": "2026-08-20T10:51:57.821Z",
                "location": {
                  "path": "/__w/serenity-js-cucumber-playwright-template/serenity-js-cucumber-playwright-template/features/authentication/form-based_authentication.feature",
                  "line": 18
                }
              },
              {
                "name": "Then she should see that authentication has succeeded",
                "outcome": "SUCCESS",
                "duration": 93,
                "children": [
                  {
                    "name": "Alice verifies that authentication has succeeded",
                    "outcome": "SUCCESS",
                    "duration": 74,
                    "children": [
                      {
                        "name": "Alice verifies that flash alert is present",
                        "outcome": "SUCCESS",
                        "duration": 50,
                        "children": [
                          {
                            "name": "Alice ensures that flash message does become visible",
                            "outcome": "SUCCESS",
                            "duration": 40,
                            "children": [],
                            "type": "Interaction",
                            "startedAt": "2026-08-20T10:51:58.102Z",
                            "location": {
                              "path": "/__w/serenity-js-cucumber-playwright-template/serenity-js-cucumber-playwright-template/features/step-definitions/the-internet.steps.ts",
                              "line": 36,
                              "column": 46
                            }
                          }
                        ],
                        "type": "Task",
                        "startedAt": "2026-08-20T10:51:58.102Z",
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
                        "startedAt": "2026-08-20T10:51:58.163Z",
                        "location": {
                          "path": "/__w/serenity-js-cucumber-playwright-template/serenity-js-cucumber-playwright-template/features/step-definitions/the-internet.steps.ts",
                          "line": 36,
                          "column": 46
                        }
                      }
                    ],
                    "type": "Task",
                    "startedAt": "2026-08-20T10:51:58.102Z",
                    "location": {
                      "path": "/__w/serenity-js-cucumber-playwright-template/serenity-js-cucumber-playwright-template/features/step-definitions/the-internet.steps.ts",
                      "line": 36,
                      "column": 46
                    }
                  }
                ],
                "type": "Task",
                "startedAt": "2026-08-20T10:51:58.093Z",
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
            "duration": 1223,
            "activities": [
              {
                "name": "Given Alice starts with the \"Form Authentication\" example",
                "outcome": "SUCCESS",
                "duration": 851,
                "children": [
                  {
                    "name": "Alice navigates to \"/\"",
                    "outcome": "SUCCESS",
                    "duration": 523,
                    "children": [],
                    "type": "Interaction",
                    "startedAt": "2026-08-20T10:51:58.219Z",
                    "location": {
                      "path": "/__w/serenity-js-cucumber-playwright-template/serenity-js-cucumber-playwright-template/features/step-definitions/the-internet.steps.ts",
                      "line": 16,
                      "column": 18
                    }
                  },
                  {
                    "name": "Alice picks example called Form Authentication",
                    "outcome": "SUCCESS",
                    "duration": 301,
                    "children": [
                      {
                        "name": "Alice clicks on the first of available examples where Text does equal \"Form Authentication\"",
                        "outcome": "SUCCESS",
                        "duration": 291,
                        "children": [],
                        "type": "Interaction",
                        "startedAt": "2026-08-20T10:51:58.753Z",
                        "location": {
                          "path": "/__w/serenity-js-cucumber-playwright-template/serenity-js-cucumber-playwright-template/test/examples/PickExample.ts",
                          "line": 12,
                          "column": 19
                        }
                      }
                    ],
                    "type": "Task",
                    "startedAt": "2026-08-20T10:51:58.753Z",
                    "location": {
                      "path": "/__w/serenity-js-cucumber-playwright-template/serenity-js-cucumber-playwright-template/features/step-definitions/the-internet.steps.ts",
                      "line": 17,
                      "column": 21
                    }
                  }
                ],
                "type": "Task",
                "startedAt": "2026-08-20T10:51:58.214Z",
                "location": {
                  "path": "/__w/serenity-js-cucumber-playwright-template/serenity-js-cucumber-playwright-template/features/authentication/form-based_authentication.feature",
                  "line": 8
                }
              },
              {
                "name": "When she logs in using \"foobar\" and \"barfoo\"",
                "outcome": "SUCCESS",
                "duration": 260,
                "children": [
                  {
                    "name": "Alice logs in as foobar",
                    "outcome": "SUCCESS",
                    "duration": 241,
                    "children": [
                      {
                        "name": "Alice enters \"foobar\" into username field",
                        "outcome": "SUCCESS",
                        "duration": 19,
                        "children": [],
                        "type": "Interaction",
                        "startedAt": "2026-08-20T10:51:59.074Z",
                        "location": {
                          "path": "/__w/serenity-js-cucumber-playwright-template/serenity-js-cucumber-playwright-template/test/authentication/Authenticate.ts",
                          "line": 18,
                          "column": 38
                        }
                      },
                      {
                        "name": "Alice enters \"barfoo\" into password field",
                        "outcome": "SUCCESS",
                        "duration": 8,
                        "children": [],
                        "type": "Interaction",
                        "startedAt": "2026-08-20T10:51:59.103Z",
                        "location": {
                          "path": "/__w/serenity-js-cucumber-playwright-template/serenity-js-cucumber-playwright-template/test/authentication/Authenticate.ts",
                          "line": 19,
                          "column": 38
                        }
                      },
                      {
                        "name": "Alice clicks on login button",
                        "outcome": "SUCCESS",
                        "duration": 183,
                        "children": [],
                        "type": "Interaction",
                        "startedAt": "2026-08-20T10:51:59.121Z",
                        "location": {
                          "path": "/__w/serenity-js-cucumber-playwright-template/serenity-js-cucumber-playwright-template/test/authentication/Authenticate.ts",
                          "line": 20,
                          "column": 19
                        }
                      }
                    ],
                    "type": "Task",
                    "startedAt": "2026-08-20T10:51:59.074Z",
                    "location": {
                      "path": "/__w/serenity-js-cucumber-playwright-template/serenity-js-cucumber-playwright-template/features/step-definitions/the-internet.steps.ts",
                      "line": 23,
                      "column": 22
                    }
                  }
                ],
                "type": "Task",
                "startedAt": "2026-08-20T10:51:59.065Z",
                "location": {
                  "path": "/__w/serenity-js-cucumber-playwright-template/serenity-js-cucumber-playwright-template/features/authentication/form-based_authentication.feature",
                  "line": 18
                }
              },
              {
                "name": "Then she should see that authentication has failed",
                "outcome": "SUCCESS",
                "duration": 89,
                "children": [
                  {
                    "name": "Alice verifies that authentication has failed",
                    "outcome": "SUCCESS",
                    "duration": 73,
                    "children": [
                      {
                        "name": "Alice verifies that flash alert is present",
                        "outcome": "SUCCESS",
                        "duration": 50,
                        "children": [
                          {
                            "name": "Alice ensures that flash message does become visible",
                            "outcome": "SUCCESS",
                            "duration": 39,
                            "children": [],
                            "type": "Interaction",
                            "startedAt": "2026-08-20T10:51:59.331Z",
                            "location": {
                              "path": "/__w/serenity-js-cucumber-playwright-template/serenity-js-cucumber-playwright-template/features/step-definitions/the-internet.steps.ts",
                              "line": 36,
                              "column": 46
                            }
                          }
                        ],
                        "type": "Task",
                        "startedAt": "2026-08-20T10:51:59.331Z",
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
                        "startedAt": "2026-08-20T10:51:59.391Z",
                        "location": {
                          "path": "/__w/serenity-js-cucumber-playwright-template/serenity-js-cucumber-playwright-template/features/step-definitions/the-internet.steps.ts",
                          "line": 36,
                          "column": 46
                        }
                      }
                    ],
                    "type": "Task",
                    "startedAt": "2026-08-20T10:51:59.331Z",
                    "location": {
                      "path": "/__w/serenity-js-cucumber-playwright-template/serenity-js-cucumber-playwright-template/features/step-definitions/the-internet.steps.ts",
                      "line": 36,
                      "column": 46
                    }
                  }
                ],
                "type": "Task",
                "startedAt": "2026-08-20T10:51:59.325Z",
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
      "timestamp": "2026-08-20T10:51:58.212Z",
      "duration": 2654,
      "outcomes": {
        "passed": 1,
        "failed": 0,
        "pending": 0,
        "skipped": 0,
        "compromised": 0,
        "error": 0
      },
      "label": "2126",
      "slowest": 2654,
      "fastest": 2654,
      "average": 2654,
      "commit": "e3e723d9a78deec2fe1bf94d69b045524ca8029c",
      "branch": "main",
      "ciJobUrl": "https://github.com/serenity-js/serenity-js-cucumber-playwright-template/actions/runs/32360909687",
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
      "buildNumber": "2126",
      "branch": "main",
      "commit": "e3e723d9a78deec2fe1bf94d69b045524ca8029c",
      "commitMessage": "Merge pull request #610 from serenity-js/fix/update-readme-references",
      "commitAuthor": "Jan Molak",
      "jobUrl": "https://github.com/serenity-js/serenity-js-cucumber-playwright-template/actions/runs/32360909687",
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
