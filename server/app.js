let model={

  randomNum: function(k,die){
    var value =  Math.floor((Math.random() * 6) + 1)
    $(die).text(value)
  }
}

let view={

  addroll: function() {
    $('#roller button.add').on('click', controller.add)
    $('#roller button.roll').on('click', controller.eachDice)
  }
}

let controller={

  add: function() {
    console.log("WAT")
    $('.dice').append('<div class="die">0</div>')
  },

  eachDice: function() {
    $('.die').each(model.randomNum)
  }
}

$(document).ready(view.addroll)
