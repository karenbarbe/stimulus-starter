import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["slide"]
  static values = { index: Number }

  next() {
    this.indexValue = (this.indexValue + 1) % this.slideTargets.length
  }

  previous() {
    this.indexValue = (this.indexValue - 1 + this.slideTargets.length) % this.slideTargets.length
  }

  // This method is called at initialization and every time the indexValue changes
  indexValueChanged() {
    this.showCurrentSlide()
  }

  showCurrentSlide() {
    this.slideTargets.forEach((slide, i) => {
      slide.hidden = i !== this.indexValue
    })
  }
}