function getOutput(references: string[], code: string, tags: string = '') {
  const refStr = references.join(' ');
  const codeStr = code.replace(/import {/g, '//import {');

  return `<!DOCTYPE html>
  <html>
  <head>
    <style>
      html { font-size: 16px; }
      a { text-decoration: none; }
    </style>
    <script src="assets/js/utils2.js"></script>
    <script src=\"https://unpkg.com/rxjs@^7/dist/bundles/rxjs.umd.min.js\"></script>
  </head>
  <body>
    ${tags}
    <script>
      ${refStr}
      ${codeStr}
    </script>
  </body>
  </html>`
}

export const rxjs_1_1_1 =
`node -v
npm -v`;

export const rxjs_1_1_2 =
`mkdir rxjs-tutorial
cd rxjs-tutorial`;

export const rxjs_1_1_3 =
`npm init`;

export const rxjs_1_1_4 =
`npm install rxjs`;

export const rxjs_1_1_5 =
`// main.ts
// Import RxJS
import { from } from 'rxjs';

// Create an observable from an array
const numbers = from([1, 2, 3, 4, 5]);

// Subscribe to the observable
numbers.subscribe(number => console.log(number));`;

export const rxjs_1_1_6 =
`node main.js`;

export const rxjs_2_2_1 =
`import { of } from 'rxjs';

// Creating an Observable from individual values
const observable = of(1, 2, 3, 4, 5);

// Subscribing to the Observable
observable.subscribe({
  next: value => console.log(value),
  complete: () => console.log('Observable complete')
});`;

export const rxjs_2_2_1_1 = getOutput(
  ['const { of } = rxjs;'],
  rxjs_2_2_1
);

export const rxjs_2_2_2 =
`import { from } from 'rxjs';

const array = [1, 2, 3, 4, 5];
const observable = from(array);

observable.subscribe(value => console.log(value));`;

export const rxjs_2_2_2_1 = getOutput(
  ['const { from } = rxjs;'],
  rxjs_2_2_2
);

export const rxjs_2_2_3 =
`import { from } from 'rxjs';

const promise = fetch('assets/data/json/integer-array.json');
const observable = from(promise.then(response => response.json()));

observable.subscribe(response => console.log(response));`;

export const rxjs_2_2_3_1 = getOutput(
  ['const { from } = rxjs;'],
  rxjs_2_2_3
);

export const rxjs_2_2_4 =
`import { fromEvent } from 'rxjs';

const button = document.querySelector('button');
const clickObservable = fromEvent(button, 'click');

clickObservable.subscribe(event => console.log('Button clicked!'));`;

export const rxjs_2_2_4_1 = getOutput(
  ['const { fromEvent } = rxjs;'],
  rxjs_2_2_4,
  '<button>Click Me!</button>'
);

export const rxjs_2_2_5 =
`import { Observable } from 'rxjs';

const customObservable = new Observable(observer => {
  observer.next(1);     // Emitting values
  observer.next(2);
  observer.complete();  // Completing the observable
});

customObservable.subscribe(
  value => console.log(value),
  error => console.error(error),
  () => console.log('Observable completed')
);`;

export const rxjs_2_2_5_1 = getOutput(
  ['const { Observable } = rxjs;'],
  rxjs_2_2_5
);

export const rxjs_2_2_6 =
`import { interval } from 'rxjs';

const intervalObservable = interval(1000); // Emit value every second

const subscription = intervalObservable.subscribe(value => console.log(value));

// Unsubscribe after 5 seconds 
setTimeout(() => { 
  subscription.unsubscribe(); 
  console.log('Subscription unsubscribed.'); 
}, 5000);`;

export const rxjs_2_2_6_1 = getOutput(
  ['const { interval } = rxjs;'],
  rxjs_2_2_6
);

export const rxjs_2_2_7 =
"import { interval, queueScheduler, scheduled } from 'rxjs'; \n\
import { observeOn } from 'rxjs/operators'; \n\
\n\
// Create an Observable that emits values at 1-second intervals \n\
const source = interval(1000); \n\
\n\
// Use the scheduled operator to change the scheduler to queueScheduler \n\
const scheduledSource = scheduled(source, queueScheduler); \n\
\n\
// Subscribe to the scheduled Observable \n\
const subscription = scheduledSource.subscribe(value => { \n\
  console.log(`Emitted value: ${value}`); \n\
}); \n\
\n\
// Unsubscribe after 5 seconds \n\
setTimeout(() => { \n\
  subscription.unsubscribe(); \n\
  console.log('Subscription unsubscribed.'); \n\
}, 5000);";

export const rxjs_2_2_7_1 = getOutput(
  ['const { interval, queueScheduler, scheduled } = rxjs;', 'const { observeOn } = rxjs.operators;'],
  rxjs_2_2_7
);

export const rxjs_2_3_1 =
`import { Observable } from 'rxjs';

// Create an observable that emits values
const observable = new Observable(observer => {
  observer.next(1);
  observer.next(2);
  observer.next(3);
  observer.complete(); // Signal that the observable is completed
});

// Subscribe to the observable
const subscription = observable.subscribe(
  value => console.log(value),     // Handle emitted values
  error => console.error(error),   // Handle errors
  () => console.log('Completed')   // Handle completion
);

// Later, when you're done with the observable, unsubscribe
subscription.unsubscribe();`;

export const rxjs_2_3_1_1 = getOutput(
  ['const { Observable } = rxjs;'],
  rxjs_2_3_1
);

export const rxjs_2_4_1 =
`import { Observable } from 'rxjs';

const observable = new Observable(observer => {
  const intervalHandle = setInterval(() => {
    observer.next('Value');
  }, 2000);

  // Clean up when unsubscribing
  return () => {
    clearInterval(intervalHandle);
  };
});

const subscription = observable.subscribe(value => console.log(value));

// Unsubscribe after 10 seconds
setTimeout(() => {
  subscription.unsubscribe();
  console.log('Subscription unsubscribed.');
}, 10000);`;

export const rxjs_2_4_1_1 = getOutput(
  ['const { Observable } = rxjs;'],
  rxjs_2_4_1
);

export const rxjs_2_4_2 =
"import { Observable } from 'rxjs'; \n\
\n\
const subscriptions = []; \n\
\n\
// Create 2 observables \n\
const intervalObservable1 = interval(500); \n\
const intervalObservable2 = interval(1000); \n\
\n\
// Subscribe intervalObservable1 and push subscription1 to subscriptions array \n\
const subscription1 = intervalObservable1.subscribe(value => console.log('Subscription 1: ', value)); \n\
subscriptions.push(subscription1); \n\
\n\
// Subscribe intervalObservable2 and push subscription2 to subscriptions array \n\
const subscription2 = intervalObservable2.subscribe(value => console.log('Subscription 2: ', value)); \n\
subscriptions.push(subscription2); \n\
\n\
// Unsubscribe after 5 seconds \n\
setTimeout(() => { \n\
  for (let i = 0; i < subscriptions.length; i++) { \n\
    subscriptions[i].unsubscribe(); \n\
    console.log(`Subscription ${i} unsubscribed.`); \n\
  } \n\
}, 5000);";

export const rxjs_2_4_2_1 = getOutput(
  ['const { interval } = rxjs;'],
  rxjs_2_4_2
);

export const rxjs_2_4_3 =
"import { interval, Subscription } from 'rxjs'; \n\
\n\
// Create a Subscription to manage multiple subscriptions \n\
const parentSubscription = new Subscription(); \n\
\n\
// Create two child subscriptions \n\
const subscription1 = interval(1000).subscribe(value => { \n\
  console.log(`Subscription 1: ${value}`); \n\
}); \n\
\n\
const subscription2 = interval(1500).subscribe(value => { \n\
  console.log(`Subscription 2: ${value}`); \n\
}); \n\
\n\
// Add the child subscriptions to the parent Subscription \n\
parentSubscription.add(subscription1); \n\
parentSubscription.add(subscription2); \n\
\n\
// Unsubscribe after 5 seconds\n\
setTimeout(() => {\n\
  parentSubscription.unsubscribe();\n\
  console.log('Subscriptions unsubscribed.');\n\
}, 5000);";

export const rxjs_2_4_3_1 = getOutput(
  ['const { interval, Subscription } = rxjs;'],
  rxjs_2_4_3
);

export const rxjs_2_4_4 =
"import { interval } from 'rxjs'; \n\
import { take } from 'rxjs/operators'; \n\
\n\
const observable = interval(1000); \n\
\n\
const sub = observable.pipe( \n\
  take(5) // Automatically unsubscribes after receiving 5 values \n\
).subscribe(value => console.log(`Received value: ${value}`));";

export const rxjs_2_4_4_1 = getOutput(
  ['const { interval } = rxjs;', 'const { take } = rxjs.operators;'],
  rxjs_2_4_4
);

export const rxjs_2_5_1 =
`const observer = {
  next: value => console.log('Next:', value),
  error: error => console.error('Error:', error),
  complete: () => console.log('Complete')
};`;

export const rxjs_2_5_2 =
`import { Observable } from 'rxjs';

const observable = new Observable(observer => {
  observer.next(1);
  observer.next(2);
  observer.complete();
});

const observer = {
  next: value => console.log('Next:', value),
  error: error => console.error('Error:', error),
  complete: () => console.log('Complete')
};

observable.subscribe(observer);`;

export const rxjs_2_5_2_1 = getOutput(
  ['const { Observable } = rxjs;'],
  rxjs_2_5_2
);

export const rxjs_2_5_3 =
`import { Observable } from 'rxjs';

const observable = new Observable(observer => {
  observer.next(1);
  observer.next(2);
  observer.complete();
});

observable.subscribe(
  value => console.log('Next:', value),
  error => console.error('Error:', error),
  () => console.log('Complete')
);`;

export const rxjs_2_5_3_1 = getOutput(
  ['const { Observable } = rxjs;'],
  rxjs_2_5_3
);

export const rxjs_3_2_1 =
`import { from } from 'rxjs';
import { filter } from 'rxjs/operators';

const source = from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

source.pipe(
  filter(x => x % 2 === 0) // Filter out even numbers
).subscribe(
  value => console.log(value),
  err => console.error(err),
  () => console.log('Complete')
);`;

export const rxjs_3_2_1_1 = getOutput(
  ['const { from } = rxjs;', 'const { filter } = rxjs.operators;'],
  rxjs_3_2_1
);

export const rxjs_3_2_2 =
`import { interval } from 'rxjs';
import { take } from 'rxjs/operators';

const source = interval(1000); // Emits a value every second

source.pipe(
  take(5) // Take the first 5 values
).subscribe(
  value => console.log(value),
  err => console.error(err),
  () => console.log('Complete')
);`;

export const rxjs_3_2_2_1 = getOutput(
  ['const { interval } = rxjs;', 'const { take } = rxjs.operators;'],
  rxjs_3_2_2
);

export const rxjs_3_2_3 =
`import { of } from 'rxjs';
import { takeWhile } from 'rxjs/operators';

const source = of(1, 2, 3, 4, 5, 6);

source.pipe(
  takeWhile(x => x <= 3) // Take values while x is less than or equal to 3
).subscribe(
  value => console.log(value),
  err => console.error(err),
  () => console.log('Complete')
);`;

export const rxjs_3_2_3_1 = getOutput(
  ['const { of } = rxjs;', 'const { takeWhile } = rxjs.operators;'],
  rxjs_3_2_3
);

export const rxjs_3_2_4 =
`import { interval } from 'rxjs';
import { skip, take } from 'rxjs/operators';

const source = interval(1000); // Emits a value every second

source.pipe(
  skip(3), // Skip the first 3 values
  take(5)  // Take the next 5 values
).subscribe(
  value => console.log(value),
  err => console.error(err),
  () => console.log('Complete')
);`;

export const rxjs_3_2_4_1 = getOutput(
  ['const { interval } = rxjs;', 'const { skip, take } = rxjs.operators;'],
  rxjs_3_2_4
);

export const rxjs_3_2_5 =
`import { of } from 'rxjs';
import { skipWhile } from 'rxjs/operators';

const source = of(1, 2, 3, 4, 5, 6);

source.pipe(
  skipWhile(x => x <= 3) // Skip values while x is less than or equal to 3
).subscribe(
  value => console.log(value),
  err => console.error(err),
  () => console.log('Complete')
);`;

export const rxjs_3_2_5_1 = getOutput(
  ['const { of } = rxjs;', 'const { skipWhile } = rxjs.operators;'],
  rxjs_3_2_5
);

export const rxjs_3_2_6 =
`import { of } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

const source = of(1, 1, 2, 2, 3, 3, 4, 4, 5);

source.pipe(
  distinctUntilChanged() // Filter out consecutive duplicates
).subscribe(
  value => console.log(value),
  err => console.error(err),
  () => console.log('Complete')
);`;

export const rxjs_3_2_6_1 = getOutput(
  ['const { of } = rxjs;', 'const { distinctUntilChanged } = rxjs.operators;'],
  rxjs_3_2_6
);

export const rxjs_3_3_1 =
`import { from } from 'rxjs';
import { map } from 'rxjs/operators';

const source = from([1, 2, 3, 4, 5]);

source.pipe(
  map(x => x * 2) // Double each value
).subscribe(
  value => console.log(value),
  err => console.error(err),
  () => console.log('Complete')
);`;

export const rxjs_3_3_1_1 = getOutput(
  ['const { from } = rxjs;', 'const { map } = rxjs.operators;'],
  rxjs_3_3_1
);

export const rxjs_3_3_2 =
`import { from } from 'rxjs';
import { pluck } from 'rxjs/operators';

const source = from([
  { name: 'Alice', age: 28 },
  { name: 'Bob', age: 32 },
  { name: 'Charlie', age: 24 }
]);

source.pipe(
  pluck('name') // Extract the 'name' property from each object
).subscribe(
  value => console.log(value),
  err => console.error(err),
  () => console.log('Complete')
);`;

export const rxjs_3_3_2_1 = getOutput(
  ['const { from } = rxjs;', 'const { pluck } = rxjs.operators;'],
  rxjs_3_3_2
);

export const rxjs_3_3_3 =
`import { from } from 'rxjs';
import { scan } from 'rxjs/operators';

const source = from([1, 2, 3, 4, 5]);

source.pipe(
  scan((accumulator, currentValue) => accumulator + currentValue, 0) // Calculate the running sum
).subscribe(
  value => console.log(value),
  err => console.error(err),
  () => console.log('Complete')
);`;

export const rxjs_3_3_3_1 = getOutput(
  ['const { from } = rxjs;', 'const { scan } = rxjs.operators;'],
  rxjs_3_3_3
);

export const rxjs_3_3_4 =
`import { of } from 'rxjs';
import { toArray } from 'rxjs/operators';

const source = of(1, 2, 3, 4, 5);

source.pipe(
  toArray() // Collect values into an array
).subscribe(
  value => console.log(value),
  err => console.error(err),
  () => console.log('Complete')
);`;

export const rxjs_3_3_4_1 = getOutput(
  ['const { of } = rxjs;', 'const { toArray } = rxjs.operators;'],
  rxjs_3_3_4
);

export const rxjs_3_4_1 =
"import { interval, merge } from 'rxjs'; \n\
import { map, take } from 'rxjs/operators'; \n\
\n\
const source1 = interval(750).pipe(map(x => `A-${x}`), take(5)); \n\
const source2 = interval(500).pipe(map(x => `B-${x}`), take(5)); \n\
\n\
const merged = merge(source1, source2); \n\
\n\
merged.subscribe( \n\
  value => console.log(value), \n\
  err => console.error(err), \n\
  () => console.log('Complete') \n\
);";

export const rxjs_3_4_1_1 = getOutput(
  ['const { interval, merge } = rxjs;', 'const { map, take } = rxjs.operators;'],
  rxjs_3_4_1
);

export const rxjs_3_4_2 =
"import { concat, interval } from 'rxjs'; \n\
import { map, take } from 'rxjs/operators'; \n\
\n\
const source1 = interval(750).pipe(map(x => `A-${x}`), take(5)); \n\
const source2 = interval(500).pipe(map(x => `B-${x}`), take(5)); \n\
\n\
const concatenated = concat(source1, source2); \n\
\n\
concatenated.subscribe( \n\
  value => console.log(value), \n\
  err => console.error(err), \n\
  () => console.log('Complete') \n\
);";

export const rxjs_3_4_2_1 = getOutput(
  ['const { concat, interval } = rxjs;', 'const { map, take } = rxjs.operators;'],
  rxjs_3_4_2
);

export const rxjs_3_4_3 =
"import { combineLatest, interval } from 'rxjs'; \n\
import { map, take } from 'rxjs/operators'; \n\
\n\
const source1 = interval(750).pipe(map(x => `A-${x}`), take(5)); \n\
const source2 = interval(500).pipe(map(x => `B-${x}`), take(5)); \n\
\n\
const combined = combineLatest(source1, source2); \n\
\n\
combined.subscribe( \n\
  value => console.log(value), \n\
  err => console.error(err) \n\
);";

export const rxjs_3_4_3_1 = getOutput(
  ['const { combineLatest, interval } = rxjs;', 'const { map, take } = rxjs.operators;'],
  rxjs_3_4_3
);

export const rxjs_3_4_4 =
`import { forkJoin, of } from 'rxjs';
import { delay } from 'rxjs/operators';

const source1 = of('A').pipe(delay(2000));
const source2 = of('B').pipe(delay(1000));

forkJoin([source1, source2]).subscribe(
  values => console.log(values),
  err => console.error(err),
  () => console.log('Complete')
);`;

export const rxjs_3_4_4_1 = getOutput(
  ['const { forkJoin, of } = rxjs;', 'const { delay } = rxjs.operators;'],
  rxjs_3_4_4
);

export const rxjs_3_4_5 =
`import { of } from 'rxjs';
import { startWith } from 'rxjs/operators';

const source = of(1, 2, 3);

source.pipe(
  startWith(0) // Prepend 0 to the values
).subscribe(
  value => console.log(value),
  err => console.error(err),
  () => console.log('Complete')
);`;

export const rxjs_3_4_5_1 = getOutput(
  ['const { of } = rxjs;', 'const { startWith } = rxjs.operators;'],
  rxjs_3_4_5
);

export const rxjs_3_5_1 =
"import { of } from 'rxjs'; \n\
import { every } from 'rxjs/operators'; \n\
\n\
const source = of(2, 4, 6, 8, 10); \n\
\n\
source.pipe( \n\
  every(x => x % 2 === 0) // Check if all values are even \n\
).subscribe( \n\
  result => console.log(`All values are even: ${result}`), \n\
  err => console.error(err) \n\
);";

export const rxjs_3_5_1_1 = getOutput(
  ['const { of } = rxjs;', 'const { every } = rxjs.operators;'],
  rxjs_3_5_1
);

export const rxjs_3_5_2 =
"import { of } from 'rxjs'; \n\
import { find } from 'rxjs/operators'; \n\
\n\
const source = of(1, 2, 3, 4, 5); \n\
\n\
source.pipe( \n\
  find(x => x > 2) // Find the first value greater than 2 \n\
).subscribe( \n\
  result => console.log(`First value greater than 2: ${result}`), \n\
  err => console.error(err) \n\
);";

export const rxjs_3_5_2_1 = getOutput(
  ['const { of } = rxjs;', 'const { find } = rxjs.operators;'],
  rxjs_3_5_2
);

export const rxjs_3_5_3 =
"import { of } from 'rxjs'; \n\
import { findIndex } from 'rxjs/operators'; \n\
\n\
const source = of(10, 20, 30, 40, 50); \n\
\n\
source.pipe( \n\
  findIndex(x => x > 35) // Find the index of the first value greater than 35 \n\
).subscribe( \n\
  result => console.log(`Index of the first value greater than 35: ${result}`), \n\
  err => console.error(err) \n\
);";

export const rxjs_3_5_3_1 = getOutput(
  ['const { of } = rxjs;', 'const { findIndex } = rxjs.operators;'],
  rxjs_3_5_3
);

export const rxjs_3_5_4 =
"import { of } from 'rxjs'; \n\
import { isEmpty } from 'rxjs/operators'; \n\
\n\
const source1 = of(); \n\
const source2 = of(1, 2, 3); \n\
\n\
source1.pipe( \n\
  isEmpty() // Check if the Observable is empty \n\
).subscribe( \n\
  result => console.log(`Is source1 empty? ${result}`), \n\
  err => console.error(err) \n\
); \n\
\n\
source2.pipe( \n\
  isEmpty() // Check if the Observable is empty \n\
).subscribe( \n\
  result => console.log(`Is source2 empty? ${result}`), \n\
  err => console.error(err) \n\
);";

export const rxjs_3_5_4_1 = getOutput(
  ['const { of } = rxjs;', 'const { isEmpty } = rxjs.operators;'],
  rxjs_3_5_4
);

export const rxjs_3_6_1 =
"import { of } from 'rxjs'; \n\
import { tap } from 'rxjs/operators'; \n\
\n\
const source = of(1, 2, 3); \n\
\n\
source.pipe( \n\
  tap(value => console.log(`Logging value: ${value}`)) \n\
).subscribe( \n\
  value => console.log(value), \n\
  err => console.error(err), \n\
  () => console.log('Complete') \n\
);";

export const rxjs_3_6_1_1 = getOutput(
  ['const { of } = rxjs;', 'const { tap } = rxjs.operators;'],
  rxjs_3_6_1
);

export const rxjs_3_6_2 =
`import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

const source = of(1, 2, 3);

source.pipe(
  delay(2000) // Delay by 2 seconds
).subscribe(
  value => console.log(value),
  err => console.error(err),
  () => console.log('Complete')
);`;

export const rxjs_3_6_2_1 = getOutput(
  ['const { of } = rxjs;', 'const { delay } = rxjs.operators;'],
  rxjs_3_6_2
);

export const rxjs_3_6_3 =
`import { of } from 'rxjs';
import { finalize } from 'rxjs/operators';

const source = of(1, 2, 3);

source.pipe(
  finalize(() => console.log('Observation complete'))
).subscribe(
  value => console.log(value),
  err => console.error(err)
);`;

export const rxjs_3_6_3_1 = getOutput(
  ['const { of } = rxjs;', 'const { finalize } = rxjs.operators;'],
  rxjs_3_6_3
);

export const rxjs_3_6_4 =
`import { interval } from 'rxjs';
import { take, timeout } from 'rxjs/operators';

const source = interval(1000).pipe(take(10));

source.pipe(
  timeout(2000) // Timeout after 2 seconds
).subscribe(
  value => console.log(value),
  err => console.error(err)
);`;

export const rxjs_3_6_4_1 = getOutput(
  ['const { interval } = rxjs;', 'const { take, timeout } = rxjs.operators;'],
  rxjs_3_6_4
);

export const rxjs_3_7_1 =
"import { of, throwError } from 'rxjs'; \n\
import { catchError } from 'rxjs/operators'; \n\
\n\
const source = throwError('An error occurred'); \n\
\n\
source.pipe( \n\
  catchError(error => of(`Error handled: ${error}`)) \n\
).subscribe( \n\
  value => console.log(value), \n\
  err => console.error(`Caught error: ${err}`) \n\
);";

export const rxjs_3_7_1_1 = getOutput(
  ['const { of, throwError } = rxjs;', 'const { catchError } = rxjs.operators;'],
  rxjs_3_7_1
);

export const rxjs_3_7_2 =
"import { of } from 'rxjs'; \n\
import { retry, tap } from 'rxjs/operators'; \n\
\n\
const source = of('A', 'B', 'C'); \n\
\n\
source.pipe( \n\
  tap(value => { \n\
    if (value === 'C') \n\
      throw new Error('An error occurred'); \n\
  }), \n\
  retry(2) // Retry up to 2 times \n\
).subscribe( \n\
  value => console.log(value), \n\
  err => console.error(err) \n\
);";

export const rxjs_3_7_2_1 = getOutput(
  ['const { of } = rxjs;', 'const { tap, retry } = rxjs.operators;'],
  rxjs_3_7_2
);

export const rxjs_3_7_3 =
"import { of, throwError, timer } from 'rxjs'; \n\
import { mergeMap, retryWhen, take } from 'rxjs/operators'; \n\
\n\
let retryCount = 0; \n\
\n\
const source = of('A', 'B', 'C'); \n\
\n\
source.pipe( \n\
  tap(value => { \n\
    if (value === 'C') \n\
      throw new Error('An error occurred'); \n\
  }), \n\
  retryWhen(errors => \n\
    errors.pipe( \n\
      mergeMap((error, index) => { \n\
        if (index < 2) { \n\
          retryCount++; \n\
          console.error(`Error encountered (${retryCount} retries): ${error}`); \n\
          return timer(2000); // Retry after a delay \n\
        } else { \n\
          return throwError(error); // Stop retrying after 2 retries \n\
        } \n\
      }) \n\
    ) \n\
  ) \n\
).subscribe( \n\
  value => console.log(value), \n\
  err => console.error(`Final error: ${err}`) \n\
);";

export const rxjs_3_7_3_1 = getOutput(
  ['const { of, throwError, timer } = rxjs;', 'const { mergeMap, retryWhen, take, tap } = rxjs.operators;'],
  rxjs_3_7_3
);

export const rxjs_3_8_1 =
`import { of } from 'rxjs';
import { filter, map } from 'rxjs/operators';

const source = of(1, 2, 3, 4, 5);

source.pipe(
  filter(x => x % 2 === 0), // Only even numbers
  map(x => x * 2)           // Double the values
).subscribe(result => console.log(result));`;

export const rxjs_3_8_1_1 = getOutput(
  ['const { of } = rxjs;', 'const { map, filter } = rxjs.operators;'],
  rxjs_3_8_1
);

export const rxjs_3_8_2 =
`import { of } from 'rxjs';

const source = of(1, 2, 3, 4, 5);

source
  .filter(x => x % 2 === 0) // Only even numbers
  .map(x => x * 2)          // Double the values
  .subscribe(result => console.log(result));`;

export const rxjs_4_1_1 =
"import { interval, of } from 'rxjs'; \n\
import { concatMap, map, take } from 'rxjs/operators'; \n\
\n\
const source = of(1, 2, 3); \n\
\n\
source.pipe( \n\
  concatMap(value => \n\
    interval(1000).pipe( \n\
      take(3), \n\
      map(innerValue => `Source: ${value}, Inner: ${innerValue}`) \n\
    ) \n\
  ) \n\
).subscribe(result => console.log(result));";

export const rxjs_4_1_1_1 = getOutput(
  ['const { of, interval } = rxjs;', 'const { concatMap, map, take } = rxjs.operators;'],
  rxjs_4_1_1
);

export const rxjs_4_2_1 =
"import { of } from 'rxjs'; \n\
import { delay, mergeMap } from 'rxjs/operators'; \n\
\n\
const source = of(1, 2, 3); \n\
\n\
source.pipe( \n\
  mergeMap(value => \n\
    of(`Processed: ${value}`).pipe( \n\
      delay(1000 / value) // Simulate some async processing. The value takes on 1, 2, and 3 respectively \n\
    ) \n\
  ) \n\
).subscribe(result => console.log(result));";

export const rxjs_4_2_1_1 = getOutput(
  ['const { of } = rxjs;', 'const { delay, mergeMap } = rxjs.operators;'],
  rxjs_4_2_1
);

export const rxjs_4_3_1 =
"import { interval, of } from 'rxjs'; \n\
import { map, switchMap, take } from 'rxjs/operators'; \n\
\n\
const source = of(1, 2, 3); \n\
\n\
source.pipe( \n\
  switchMap(value => \n\
    interval(1000).pipe( \n\
      take(3), \n\
      map(innerValue => `Source: ${value}, Inner: ${innerValue}`) \n\
    ) \n\
  ) \n\
).subscribe(result => console.log(result));";

export const rxjs_4_3_1_1 = getOutput(
  ['const { interval, of  } = rxjs;', 'const { map, switchMap, take } = rxjs.operators;'],
  rxjs_4_3_1
);

export const rxjs_4_4_1 =
"import { interval, of } from 'rxjs'; \n\
import { exhaustMap, take } from 'rxjs/operators'; \n\
\n\
// Source observable emits values 1, 2, 3 \n\
const source = of(1, 2, 3); \n\
\n\
source.pipe( \n\
  exhaustMap(value => { \n\
    // Inner observable emits values based on source value \n\
    return interval(1000).pipe( \n\
      take(3), // Limit inner observable to emit 3 values \n\
      map(innerValue => `${value}-${innerValue}`) \n\
    ); \n\
  }) \n\
) \n\
.subscribe(result => { \n\
  console.log(result); \n\
});";

export const rxjs_4_4_1_1 = getOutput(
  ['const { interval, of  } = rxjs;', 'const { map, exhaustMap, take } = rxjs.operators;'],
  rxjs_4_4_1
);

export const rxjs_4_5_1 =
"import { fromEvent } from 'rxjs'; \n\
import { debounceTime, map } from 'rxjs/operators'; \n\
\n\
// Create an observable from input events (e.g., user typing) \n\
const input = document.getElementById('search-input'); \n\
const inputs = fromEvent(input, 'input'); \n\
\n\
inputs.pipe( \n\
  debounceTime(300), // Wait for 300 milliseconds of inactivity \n\
  map(event => event.target.value) \n\
).subscribe(value => console.log('Input Value:', value));";

export const rxjs_4_5_1_1 = getOutput(
  ['const { fromEvent  } = rxjs;', 'const { debounceTime, map } = rxjs.operators;'],
  rxjs_4_5_1,
  '<label>Key in rapidly! </label><input id="search-input">'
);

export const rxjs_4_6_1 =
"import { fromEvent } from 'rxjs'; \n\
import { map, throttleTime } from 'rxjs/operators'; \n\
\n\
// Create an observable from mousemove events \n\
const mousemove = fromEvent(document, 'mousemove'); \n\
\n\
mousemove.pipe( \n\
  throttleTime(1000), // Allow one event per 1000 milliseconds \n\
  map(event => `Mouse Position: (${event.clientX}, ${event.clientY})`) \n\
).subscribe(position => console.log(position));";

export const rxjs_4_6_1_1 = getOutput(
  ['const { fromEvent  } = rxjs;', 'const { map, throttleTime } = rxjs.operators;'],
  rxjs_4_6_1,
  '<p>Move mouse in this area!</p>'
);

export const rxjs_4_7_1 =
"import { fromEvent, interval } from 'rxjs'; \n\
import { buffer, take } from 'rxjs/operators'; \n\
\n\
// Create a source observable that emits values every 500ms \n\
const source = interval(500).pipe(take(20)); \n\
\n\
// Create a signal observable that emits values every 2000ms (2 seconds) \n\
const signal = interval(2000).pipe(take(5)); \n\
\n\
// Use buffer to collect values from the source based on the signal \n\
const bufferedSource = source.pipe(buffer(signal)); \n\
\n\
// Subscribe to the buffered source \n\
bufferedSource.subscribe(buffer => { \n\
  console.log('Buffered Values:', buffer); \n\
});";

export const rxjs_4_7_1_1 = getOutput(
  ['const { fromEvent, interval } = rxjs;', 'const { buffer, take } = rxjs.operators;'],
  rxjs_4_7_1
);

export const rxjs_4_8_1 =
"import { interval } from 'rxjs'; \n\
import { mergeAll, take, window as win } from 'rxjs/operators'; \n\
\n\
// Create a source observable that emits values every 500ms \n\
const source = interval(500); \n\
\n\
// Create a boundary observable that emits values every 2000ms (2 seconds) \n\
const boundary = interval(2000); \n\
\n\
// Use window to create windows based on the boundary \n\
const windowedSource = source.pipe(win(boundary)); \n\
\n\
// Merge all windows into a single observable \n\
const mergedWindows = windowedSource.pipe(mergeAll()); \n\
\n\
// Take the first 3 values from each window \n\
const result = mergedWindows.pipe(take(9)); \n\
\n\
// Subscribe to the result \n\
result.subscribe(value => { \n\
  console.log('Value:', value); \n\
});";

export const rxjs_4_8_1_1 = getOutput(
  ['const { interval } = rxjs;', 'const { mergeAll, take, window: win } = rxjs.operators;'],
  rxjs_4_8_1
);

export const rxjs_4_9_1 =
`import { of, pipe } from 'rxjs';
import { filter, map } from 'rxjs/operators';

// The customOperator function is defined, taking a predicate as an argument
const customOperator = (predicate) => pipe(
  filter(predicate),
  map(value => value * 2)
);

// An observable named source is defined
const source = of(2, 4, 6, 8, 10);

// The customOperator is applied to the source observable with a predicate function
source.pipe(
  customOperator(x => x > 5)
).subscribe(result => {
  console.log(result);// Output: 12, 16, 20
});`;

export const rxjs_4_9_1_1 = getOutput(
  ['const { of, pipe } = rxjs;', 'const { filter, map } = rxjs.operators;'],
  rxjs_4_9_1
);

export const rxjs_4_9_2 =
`import { Observable } from 'rxjs';

// Define the custom operator function
function multiplyBy(factor) {
  // Return a function that takes the source observable as an argument
  return (source) => {
    // Create and return a new observable
    return new Observable((observer) => {
      // Subscribe to the source observable
      const subscription = source.subscribe({
        next(value) {
          // Multiply the value by the specified factor
          const result = value * factor;
          // Emit the transformed value
          observer.next(result);
        },
        error(error) {
          // Pass along any errors
          observer.error(error);
        },
        complete() {
          // Complete the observer when the source completes
          observer.complete();
        },
      });

      // Return a cleanup function to unsubscribe from the source
      return () => {
        subscription.unsubscribe();
      };
    });
  };
}

// Create an example observable
const source = new Observable((observer) => {
  observer.next(1);
  observer.next(2);
  observer.next(3);
  observer.complete();
});

// Use the custom operator
source.pipe(
  multiplyBy(10) // Multiply each value by 10
).subscribe((result) => {
  console.log(result); // Output: 10, 20, 30
});`;

export const rxjs_4_9_2_1 = getOutput(
  ['const { Observable } = rxjs;'],
  rxjs_4_9_2
);

export const rxjs_5_2_1 =
"import { Subject } from 'rxjs'; \n\
\n\
// Create a new Subject \n\
const subject = new Subject(); \n\
\n\
// Subscribe multiple observers to the Subject \n\
subject.subscribe({ \n\
  next: value => console.log(`Observer A: ${value}`) \n\
}); \n\
\n\
subject.subscribe({ \n\
  next: value => console.log(`Observer B: ${value}`) \n\
}); \n\
\n\
// Emit values from the Subject \n\
subject.next(1); // Emits to both Observer A and Observer B \n\
subject.next(2); // Emits to both Observer A and Observer B";

export const rxjs_5_2_1_1 = getOutput(
  ['const { Subject } = rxjs;'],
  rxjs_5_2_1
);

export const rxjs_5_3_1 =
`import { BehaviorSubject } from 'rxjs';

// Create a BehaviorSubject with an initial value
const behaviorSubject = new BehaviorSubject('Initial value');

// Subscribe to the BehaviorSubject
behaviorSubject.subscribe(value => console.log('Observer 1:', value)); // Outputs: Observer 1: Initial value

// Emit a new value
behaviorSubject.next('New value'); // Outputs: Observer 1: New value

// Subscribe to the BehaviorSubject after a value has been emitted
behaviorSubject.subscribe(value => console.log('Observer 2:', value)); // Outputs: Observer 2: New value`;

export const rxjs_5_3_1_1 = getOutput(
  ['const { BehaviorSubject } = rxjs;'],
  rxjs_5_3_1
);

export const rxjs_5_4_1 =
`import { ReplaySubject } from 'rxjs';

// Create a ReplaySubject that replays the last 2 values
const replaySubject = new ReplaySubject(2);

// Emit values to the ReplaySubject
replaySubject.next('Value 1');
replaySubject.next('Value 2');
replaySubject.next('Value 3');

// Subscribe to the ReplaySubject
replaySubject.subscribe(value => console.log('Observer 1:', value)); // Outputs: Observer 1: Value 2, Observer 1: Value 3

// Emit another value
replaySubject.next('Value 4');

// Subscribe to the ReplaySubject after values have been emitted
replaySubject.subscribe(value => console.log('Observer 2:', value)); // Outputs: Observer 2: Value 3, Observer 2: Value 4`;

export const rxjs_5_4_1_1 = getOutput(
  ['const { ReplaySubject } = rxjs;'],
  rxjs_5_4_1
);

export const rxjs_5_5_1 =
`import { AsyncSubject } from 'rxjs';

// Create an AsyncSubject
const asyncSubject = new AsyncSubject();

// Subscribe to the AsyncSubject
asyncSubject.subscribe(value => console.log('Observer 1:', value));

// Emit values to the AsyncSubject
asyncSubject.next('Value 1');
asyncSubject.next('Value 2');

// Complete the AsyncSubject
asyncSubject.complete();

// Subscribe to the AsyncSubject after completion
asyncSubject.subscribe(value => console.log('Observer 2:', value)); // Outputs: Observer 2: Value 2`;

export const rxjs_5_5_1_1 = getOutput(
  ['const { AsyncSubject } = rxjs;'],
  rxjs_5_5_1
);

export const rxjs_6_1_1 =
`import { of } from 'rxjs';

const coldObservable = of(1, 2, 3);

// Subscribers get independent streams
coldObservable.subscribe(value => console.log('Subscriber A:', value));
coldObservable.subscribe(value => console.log('Subscriber B:', value));`;

export const rxjs_6_1_2 =
`import { Subject } from 'rxjs';

const hotObservable = new Subject();

hotObservable.subscribe(value => console.log('Subscriber A:', value));
hotObservable.subscribe(value => console.log('Subscriber B:', value));

hotObservable.next(1); // Both subscribers receive the same value`;
