export const x = 100;

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

export const rxjs_2_2_2 =
`import { from } from 'rxjs';

const array = [1, 2, 3, 4, 5];
const observable = from(array);

observable.subscribe(value => console.log(value));`;

export const rxjs_2_2_3 =
`import { from } from 'rxjs';

const promise = fetch('https://api.example.com/data');
const observable = from(promise);

observable.subscribe(response => console.log(response));`;

export const rxjs_2_2_4 =
`import { fromEvent } from 'rxjs';

const button = document.querySelector('button');
const clickObservable = fromEvent(button, 'click');

clickObservable.subscribe(event => console.log('Button clicked!'));`;

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

export const rxjs_2_2_6 =
`import { interval } from 'rxjs';

const intervalObservable = interval(1000); // Emit value every second

intervalObservable.subscribe(value => console.log(value));`;

export const rxjs_2_2_7 =
"import { scheduled, interval, queueScheduler } from 'rxjs'; \n\
import { observeOn } from 'rxjs/operators'; \n\
\n\
// Create an Observable that emits values at 1-second intervals \n\
const source = interval(1000); \n\
\n\
// Use the scheduled operator to change the scheduler to queueScheduler \n\
const scheduledSource = scheduled([source], queueScheduler); \n\
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

export const rxjs_2_4_1 =
`const observable = new Observable(observer => {
  const intervalHandle = setInterval(() => {
    observer.next('Value');
  }, 2000);

  // Clean up when unsubscribing
  return () => {
    clearInterval(intervalHandle);
  };
});

const subscription = observable.subscribe(value => console.log(value));

// Later, when you're done with the observable
subscription.unsubscribe();`;

export const rxjs_2_4_2 =
`import { Observable } from 'rxjs';

const observables = [];

function createObservable() {
  const observable = new Observable(/* ... */);
  const subscription = observable.subscribe(/* ... */);
  observables.push(subscription);
}

// Later, when you're done with all observables
for (const subscription of observables) {
  subscription.unsubscribe();
}`;

export const rxjs_2_4_3 =
"import { Subscription, interval } from 'rxjs'; \n\
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
parentSubscription.add(subscription1, subscription2); \n\
\n\
// Later, when you're done, unsubscribe from all subscriptions at once \n\
parentSubscription.unsubscribe(); \n\
\n\
// After unsubscribing, no further emissions are received from either subscription";

export const rxjs_2_4_4 =
"import { interval } from 'rxjs'; \n\
import { take } from 'rxjs/operators'; \n\
\n\
const observable = interval(1000); \n\
\n\
const sub = observable.pipe( \n\
  take(5) // Automatically unsubscribes after receiving 5 values \n\
).subscribe(value => console.log(`Received value: ${value}`));";

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

observable.subscribe(observer);`;

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

export const rxjs_3_1_1 =
``;