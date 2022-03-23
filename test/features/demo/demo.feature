Feature: Demo feature

    Feature Description
  @demo
    Scenario Outline: Run first demo feature
        Given Google page is opened
        When Search with <SearchItem>
        Then Click on the first search result
        Then Url shuld match <ExpectedUrl>

    Examples:
      | TestID     | SearchItem | ExpectedUrl           |
      | DEMO_TC001 | WDIO       | https://webdriver.io/ |