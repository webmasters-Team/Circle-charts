class Skill {
    constructor(name, percentageLearned) {
      this.percentageLearned = percentageLearned
      this.name = name
    }
  
    getDOMObject() {
      //console.log(document.querySelector(`#${this.name}`));
      return document.querySelector(`#${this.name}`)
    }
  
    getOffset() {
      let obj = this.getDOMObject()
      //console.log(obj.getTotalLength() - 2 * Math.PI * this.percentageLearned);
      return obj.getTotalLength() - 2 * Math.PI * this.percentageLearned
    }
  
    setDefaultOffset() {
      let obj = this.getDOMObject(),
        length = obj.getTotalLength()
      obj.style.strokeDashoffset = obj.style.strokeDashoffset - length
    }
  
    setOffset() {
      let obj = this.getDOMObject(),
        length = obj.getTotalLength(),
        offset = this.getOffset()
      obj.style.strokeDasharray = length
      obj.style.strokeDashoffset = offset
      console.log(offset)
    }
  
    printSkill() {
      let interval,
        counter = 0,
        obj = document.querySelector(`p[data-skill-type=${this.name}]`)
  
      interval = setInterval(() => {
        obj.innerText = counter + "%"
        if (counter === this.percentageLearned) {
          clearInterval(interval)
          console.log(counter)
        }
        counter++
      }, 10)
    }
  }
  
  var skills = [
    new Skill("angular", 35),
    new Skill("bootstrap", 55),
    new Skill("css3", 65),
    new Skill("gulp", 10),
    new Skill("html5", 75),
    new Skill("javascript", 60)
  ]
  
  skills.forEach(skill => {
    skill.setOffset()
    skill.printSkill()
  })
  
