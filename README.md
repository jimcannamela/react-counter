## User Stories 

```
Feature: Counters
  A counter is a box containing a value and 2 buttons. The value can be increased or decreased by clicking the + or - buttons.
  
Scenario: The 'Create' button is rendered to the view with no counters.

Given the 'Create' button is clicked
Then a new counter is created and rendered
And is added to the list of counters

Given a counter is rendered
When the counter value is 0
Then the '-' button is not clickable.

Given a counter has a value of 0
When its value is incremented
Then its' value is increased by 1

Feature: Super Counters

Rule: 3 counters creates 1 super counter.

Given there are 3 counters
When the 'Create' button is clicked
Then a Super Counter will be created and rendered
And it will have a starting value equal to the value of the 3 Counters
And the 3 counters will be removed from the view.

Given a Super Counter has been created
When its rendered to view
Then its twice the size of a Counter

Given there's 1 Super Counter 
When its value is 0
Then the '-' button is not clickable.

Given 1 Super Counter
When the '+' button is clicked
Then its value increases by 3

Given a Super Counter with a value of 5
When the '-' button is clicked
Then its value is decreased by 3

Feature: Super Duper Counters (STRETCH GOAL)
Rule: Super Duper Counters are twice the size of Super Counters and have a unique color.

Given here are 2 Super Counters rendered to view and 3 Counters
When the 'Create' button is clicked
Then a Super Duper Counter will be created
And it will have a starting value equal to the sum of the values of the 3 Super Counters 
And it will have a start button.
And 3 Super Counters will be removed from the view.

Given a Super Duper Counter with value of 0
When the start button is clicked
Then the counter will automatically increment its value by 1 every second
And the Start button becomes disabled

Given a Super Duper Counter has been started
When the counter value is evenly divisible by 20
Then a new Counter is automatically created.
And the Super Duper Counter continues

Feature: Colossal Counters (STRETCH GOAL)
Rule: Colossal Counters are larger than Super Duper Counters and have a unique color. It doesn't have any buttons.

Given there are 2 Super Duper Counters and 3 Counters
When a new Counter is created
Then a Colossal Counter is created
And it will have a starting value equal to the sum of the values of the 3 Super Duper Counters
And it will have a start button.
And the 3 Super Duper Counters will be removed from the view.

Given a Colossal Counter
When its rendered to view
Then it automatically increases in value by 2 every second

Given a Colossal Counter
When the counter value is evenly divisible by 10
Then a new Counter is automatically created
And the Colossal Counter continues incrementing
```