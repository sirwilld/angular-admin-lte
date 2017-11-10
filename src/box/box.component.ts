import { Component, Input, ContentChild, Output, AfterViewInit, EventEmitter, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef, ViewChild, NgZone, Renderer2 } from '@angular/core';

//import { AnimationEvent, collapseAnimation } from '../animations';

import { BoxContentDirective, BoxFooterDirective, BoxHeaderDirective, BoxToolsDirective } from './box.directive';

/*
 *
 */
@Component({
  selector: 'mk-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css'],
  //animations: [collapseAnimation()],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BoxComponent implements AfterViewInit, OnDestroy {
  public isCollaping: boolean;
  public remove = false;
  public removed: boolean;

  private toggleButtonListener: Function;
  private removeButtonListener: Function;

  @Input() public boxColor = 'default';
  @Input() public buttonsStyleClass = 'btn btn-box-tool';
  @Input() public contentStyleClass = 'box-content-wrapper';
  @Input() public contentColor: string;
  @Input() public footer: string;
  @Input() public footerColor: string;
  @Input() public footerStyleClass = 'box-footer';
  @Input() public header: string;
  @Input() public headerBorder = true;
  @Input() public headerColor: string;
  @Input() public headerStyleClass = 'box-header';
  @Input() public isCollapsable = true;
  @Input() public isCollapsed = false;
  @Input() public isLoading: boolean;
  @Input() public isRemovable = true;
  @Input() public isSolid = false;
  @Input() public loadingColor: string;
  @Input() public loadingStyleClass = 'fa fa-refresh fa-spin';
  @Input() public styleClass = 'box';

  @Output() public onCollapseDone = new EventEmitter();
  @Output() public onCollapseStart = new EventEmitter();

  @ContentChild(BoxHeaderDirective) public boxHeaderDirective: BoxHeaderDirective;
  @ContentChild(BoxFooterDirective) public boxFooterDirective: BoxFooterDirective;
  @ContentChild(BoxContentDirective) public boxContentDirective: BoxContentDirective;
  @ContentChild(BoxToolsDirective) public boxToolsDirective: BoxToolsDirective;

  @ViewChild('toggleButtonElement') private toggleButtonElement;
  @ViewChild('removeButtonElement') private removeButtonElement;

  /**
   * @method constructor
   * @param  {ChangeDetectorRef} privatechangeDetectorRef [description]
   * @param  {NgZone}            privatengZone            [description]
   * @param  {Renderer2}         privaterenderer2         [description]
   */
  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private ngZone: NgZone,
    private renderer2: Renderer2
  ) {}

  /**
   * @method ngAfterViewInit
   */
  ngAfterViewInit() {
    this.ngZone.runOutsideAngular(() => {
      if(this.toggleButtonElement) {
        this.toggleButtonListener = this.renderer2.listen(this.toggleButtonElement.nativeElement, 'click', (event: Event) => {
          this.isCollapsed = !this.isCollapsed;
          this.changeDetectorRef.detectChanges();
        });
      }
      if(this.removeButtonElement) {
        this.removeButtonListener = this.renderer2.listen(this.removeButtonElement.nativeElement, 'click', (event: Event) => {
          this.remove = true;
          this.changeDetectorRef.detectChanges();
        });
      }
    });
  }

  /**
   * @method ngOnDestroy
   */
  ngOnDestroy() {
    if(this.toggleButtonListener) {
      this.toggleButtonListener();
    }
    if(this.removeButtonListener) {
      this.removeButtonListener();
    }
  }

  /**
   * [removedDone description]
   * @method removedDone
   * @param  {[type]}    event [description]
   */
  public removedDone(event): void {
    if(event.toState === '1') {
      this.removed = true;
    }
  }

  /**
   * [collapseStart description]
   * @method collapseStart
   * @param  {AnimationEvent} event [description]
   */
  public collapseStart(event): void {
    if(event.fromState !== 'void') {
      this.isCollaping = true;
      this.onCollapseStart.emit(event);
    }
  }

  /**
   * [collapseDone description]
   * @method collapseDone
   * @param  {AnimationEvent} event [description]
   */
  public collapseDone(event): void {
    if(event.fromState !== 'void') {
      this.isCollaping = false;
      this.onCollapseDone.emit(event);
    }
  }
}