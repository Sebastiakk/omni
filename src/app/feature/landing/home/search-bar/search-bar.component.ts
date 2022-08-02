import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent {
  searchValue = new FormControl('');

  @Output()
  onSearch = new EventEmitter();

  search() {
    this.onSearch.emit(this.searchValue.value);
  }

}
