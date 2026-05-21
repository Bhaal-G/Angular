import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signal-deep-dive',
  imports: [],
  templateUrl: './signal-deep-dive.html',
  styleUrl: './signal-deep-dive.css',
})
export class SignalDeepDive {
  count= signal(2);

  doubleCount = computed(() => this.count() * 2);

  constructor() {{
    effect(() => {
      console.log('Count is: ', this.count());
      console.log('Double Count is: ', this.doubleCount());
    });
    }
  }

  increment() {
    this.count.update((c) => c + 1);
  }

}
