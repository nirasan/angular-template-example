import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.css']
})
export class DogComponent implements OnInit {

  @Input() name: string;

  @Output() say = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
    // 定期的にイベントを発行する.
    setInterval(() => {
      // emit の引数がイベントを受ける側へ $event として渡される.
      this.say.emit('my name is ' + this.name);
    }, 3000);
  }

}
