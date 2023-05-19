# Counting on React

Congratulations!  You're part of the small, selective tech team working at CountCorp, an exciting new startup that is disrupting the counting market.  Today is the day you build some cutting-edge counters that prove to your investors that this project is worth every penny of their investment.  As the CEO is fond of saying, "We're going to be the best in the business.  You can count on it."

## Features

After numerous focus groups and diligent market research, the big brains in the C-Suite have come up with an idea of what modern consumers are looking for in a counting application.  The CTO of the company has broken these consumer needs down into a set of features for you and your team to implement:

```
Component 1: App
  The App component should contain the entire application.  
    * It should have a button to create new counters.
    * It shouold also have an area to display existing counters.
    * When the page loads, it should have no counters on it.
Component 2: Counter
  A counter is a box containing a value and 2 buttons. 
    * The value can be increased or decreased by clicking the + or - buttons.
Component 3: SuperCounter
  When there are 3 Counter components on the screen, they automatically combine to create a SuperCounter.
    * This means the three Counters will disappear, and the SuperCounter will appear.
    * The SuperCounter's initial value will be equal to the sum of the values of the removed Counters.
    * The SuperCounter's value increases or decreases by 3 when its + or - buttons are clicked.
Component 4: SuperDuperCounter
  When there are 3 SuperCounter components on the screen, they automatically combine to create a SuperDuperCounter.
    * This means the three SuperCounters will disappear, and the SuperDuperCounter will appear.
    * The SuperDuperCounter's initial value will be equal to the sum of the values of the removed SuperCounters.
    * The SuperDuperCounter has a "start" button.
    * When the "start" button is clicked, the value of the SuperDuperCounter increases by 1 every second.
```

