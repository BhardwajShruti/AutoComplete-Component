Q.What is the difference between Component and PureComponent? give an
example where it might break my app.
Ans.React Component do not implement componentDidUpdate implicitly but there is an implicit implementation of componentDidUpdate for Pure React Component and makes shallow comparison of state  and props to re render the component . It might break the app as shallow comparison is only comparison between the addresses.


Q. Context + ShouldComponentUpdate might be dangerous. Can think of why
is that?
Ans.Can be dangerous when shallow copied data is different.

Q. Describe 3 ways to pass information from a component to its PARENT.
Ans.1)the parent  will pass a function capable of handling that data to the child.
2)or by using context

Q. Give 2 ways to prevent components from re-rendering.
Ans.by using Purecomponent or  implement componentDidUpdate


Q. What is a fragment and why do we need it? Give an example where it
might break my app.
Ans.To Wrap the html code into a single parent tag


Q what's the difference in handling exceptions in promises, callbacks and
async...await.
Ans.Promise = wait for resolution , rejection but other task keep runnning
async await  = await pauses code execution at the line till it completes.
Callback = function executed when request completes.

Q How many arguments does setState take and why is it async.
Ans. two arguments  , updating state and re rendering makes it async

Q.List a few ways styles can be used with components.
Ans.by inline or making class and definig in className

Q. How to render an HTML string coming from the server.
Ans.Set into a state variable and show in template using {{}}