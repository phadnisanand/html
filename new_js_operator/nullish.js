// https://www.geeksforgeeks.org/javascript-nullish-coalescing-operator/
//  The nullish coalescing operator (??) is a JavaScript operator that is used to provide a default value for a variable that may be null or undefined.
function foo(bar) {
    bar = bar ?? 55;
    console.log(bar);
}
foo(); // 55
foo(22); // 22
