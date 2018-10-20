import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { delay } from '../../shared/delay';

@Component({
  selector: 'mdi-assign-issue-modal',
  templateUrl: './assignIssueModal.component.html'
})
export class AssignIssueModal {
  @Input() issueNumber: number;
  @ViewChild('issueNumberInput') issueNumberInput: ElementRef;

  constructor(public activeModal: NgbActiveModal) {}

  async ngOnInit() {
    await delay();
    this.issueNumberInput.nativeElement.focus();
  }

  save($event) {
    this.activeModal.close(this.issueNumber);
    if ($event) {
      $event.preventDefault();
    }
  }

  clear() {
    this.activeModal.close(null);
  }
}