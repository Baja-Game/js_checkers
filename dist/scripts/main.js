
var utils = {

  isOdd: function (n) {
    return n % 2 === 1;
  },

  isEven: function (n) {
    return n % 2 === 1;
  },

  pluralize: function (word, count) {
    return count === 1 ? word : word + 's';
  },

};



window.app = {};

// Temporary - this will presumably move to app.user.username
app.username = 'Test3';



// CREATE USER =================================================================

var createUserURL = 'https://baja-checkers.herokuapp.com/users',
    user = {
      email: 'test2@test.com',
      password: 'password1',
      username: 'Test2'
    };

// $.post(createUserURL, {user: user}, function (data) {
//   console.log(data);
// });

var returnedUserTest2 = {
  auth_token: "s6NmkzRkUhCZJj7zzK4_",
  user: {
    draws: 0,
    email: "test2@test.com",
    experience: 0,
    forfeits: 0,
    losses: 0,
    username: "Test2",
    wins: 0
  }
};


// LOGIN USER ==================================================================

var loginUserURL = 'https://baja-checkers.herokuapp.com/users/sign_in',
    user = {
      email: 'test3@test.com',
      password: 'password1'
    };

// $.post(loginUserURL, {user: user}, function (data) {
//   console.log(data);
// });

var returnedUserTest3 = {
  auth_token: "ursXYhG-AeFxxk8NCzvk",
  user: {
    draws: 0,
    email: "test3@test.com",
    experience: 0,
    forfeits: 0,
    losses: 0,
    username: "Test3",
    wins: 0
  }
};


// LIST GAMES ==================================================================

var listGamesURL = 'https://baja-checkers.herokuapp.com/games',
    auth_token = "ursXYhG-AeFxxk8NCzvk",
    url = listGamesURL + '?auth_token=' + auth_token;

// $.getJSON(url, function (data) {
//   console.log('jQuery getJSON of games list...');
//   console.log('\n\n', data);
// });

var returnedListGamesTest3 = [
  {
    game: {
      board: [
        [' ','1',' ','1',' ','1',' ','1'],

        ['1',' ','1',' ','1',' ','1',' '],

        [' ','1',' ','1',' ','1',' ','1'],

        [' ',' ',' ',' ',' ',' ',' ',' '],

        [' ',' ',' ',' ',' ',' ',' ',' '],

        ['2',' ','2',' ','2',' ','2',' '],

        [' ','2',' ','2',' ','2',' ','2'],

        ['2',' ','2',' ','2',' ','2',' ']
      ],
      finished: null,
      id: 14,
      turn_counter: 1,
      updated_at: "2015-02-20T15:00:50.027Z",
    },
    player1: {
      id: 7,
      username: "maxmcchesney"
    },
    player2: {
      id: 12,
      username: "Test3"
    },
  },
  {},  // same as above, except updated_at: "2015-02-20T15:01:28.025Z"
  {},  // same as above, except updated_at: "2015-02-20T15:21:14.469Z"
  {}   // same as above, except updated_at: "2015-02-20T16:04:27.431Z"
]


// JOIN GAME ===================================================================

var joinGameURL = 'https://baja-checkers.herokuapp.com/games',
    auth_token = 'ursXYhG-AeFxxk8NCzvk';

// $.ajax({
//   url: joinGameURL,
//   type: 'PUT',
//   data: {auth_token: auth_token}
// })
// .done(function (data) {
//   console.log(data);
// });

var returnedJoinGameTest3 = {
  game: {
    board: [
      [' ','1',' ','1',' ','1',' ','1'],

      ['1',' ','1',' ','1',' ','1',' '],

      [' ','1',' ','1',' ','1',' ','1'],

      [' ',' ',' ',' ',' ',' ',' ',' '],

      [' ',' ',' ',' ',' ',' ',' ',' '],

      ['2',' ','2',' ','2',' ','2',' '],

      [' ','2',' ','2',' ','2',' ','2'],

      ['2',' ','2',' ','2',' ','2',' ']
    ],
    finished: null,
    id: 14,
    turn_counter: 1,
    updated_at: "2015-02-20T15:00:50.027Z",
    // updated_at: "2015-02-20T15:01:28.025Z",
    // updated_at: "2015-02-20T15:21:14.469Z",
    // updated_at: "2015-02-20T16:04:27.431Z",
  },
  player1: {
    id: 7,
    username: "maxmcchesney"
  },
  player2: {
    id: 12,
    username: "Test3"
  }
}


var gamesURL = 'http://tiy-atl-fe-server.herokuapp.com/collections/bob_ch_games_array',

    game = {
      game_id: 'unique_string',
      timestamp: '2015-02-17T18:25:43.511Z',
      player1: 'my_id',
      player2: null,
      board: [
        [' ','M',' ','M',' ','M',' ','M'],

        ['M',' ','M',' ','M',' ','M',' '],

        [' ','M',' ','M',' ','M',' ','M'],

        [' ',' ',' ',' ',' ',' ',' ',' '],

        [' ',' ',' ',' ',' ',' ',' ',' '],

        ['m',' ','m',' ','m',' ','m',' '],

        [' ','m',' ','m',' ','m',' ','m'],

        ['m',' ','m',' ','m',' ','m',' ']
      ],
      last_move: [],
      turn_counter: 1,
      dull_move_counter: 0,
      is_timed: false,
      finished: 0
    };


// $.post(gamesURL, game, function (data) {
//   console.log(data);
// });

game.timestamp = '2015-02-17T18:35:43.511Z';
game.board[5][4] = ' ';
game.board[4][5] = 'm';
game.player2 = 'Opponent1';
game.turn_counter = 2;
game.dull_move_counter = 1;

// $.post(gamesURL, game, function (data) {
//   console.log(data);
// });

game.timestamp = '2015-02-17T18:45:43.511Z';
game.board[2][1] = ' ';
game.board[3][2] = 'M';
game.player2 = 'Opponent2';
game.turn_counter = 3;
game.dull_move_counter = 2;

// $.post(gamesURL, game, function (data) {
//   console.log(data);
// });





var games = [
  {
    isMyTurn: true,
    lastMoveTime: '9h',
    opponent: 'BossMan',
    myPrisonCount: 8,
    isTimed: true
  },
  {
    isMyTurn: true,
    lastMoveTime: '2d',
    opponent: 'GrassZilla',
    myPrisonCount: 2,
    isTimed: false
  },
  {
    isMyTurn: true,
    lastMoveTime: '2d',
    opponent: 'Amelia_Badelia',
    myPrisonCount: 'NO',
    isTimed: false
  },
  {
    isMyTurn: true,
    lastMoveTime: '5d',
    opponent: 'Choe',
    myPrisonCount: 1,
    isTimed: true
  },
  {
    isMyTurn: false,
    lastMoveTime: '1m',
    opponent: 'Blasphemous',
    myPrisonCount: 3,
    isTimed: true
  },
  {
    isMyTurn: false,
    lastMoveTime: '2d',
    opponent: 'BurgWorm',
    myPrisonCount: 2,
    isTimed: true
  },
  {
    isMyTurn: false,
    lastMoveTime: '2d',
    opponent: 'Eureka',
    myPrisonCount: 9,
    isTimed: false
  },
];


(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['game'] = template({"1":function(depth0,helpers,partials,data) {
  return "<i class=\"fa fa-spinner fa-pulse\"></i>";
  },"3":function(depth0,helpers,partials,data) {
  return "<i class=\"fa fa-clock-o\"></i>";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, lambda=this.lambda, escapeExpression=this.escapeExpression, functionType="function", helperMissing=helpers.helperMissing, buffer = "\n<li id=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.game : depth0)) != null ? stack1.id : stack1), depth0))
    + "\">\n  <div class=\"image\"><img src=\"http://www.gravatar.com/avatar/"
    + escapeExpression(((helper = (helper = helpers.hash || (depth0 != null ? depth0.hash : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"hash","hash":{},"data":data}) : helper)))
    + "?s=80&d=monsterid\"></div>\n  <div class=\"text\">\n    <div class=\"opponent-name\">"
    + escapeExpression(((helper = (helper = helpers.opponent || (depth0 != null ? depth0.opponent : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"opponent","hash":{},"data":data}) : helper)))
    + "</div>\n    <div class=\"captured\">You have captured <span class=\"captured-value\">"
    + escapeExpression(((helper = (helper = helpers.prisonCount || (depth0 != null ? depth0.prisonCount : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"prisonCount","hash":{},"data":data}) : helper)))
    + "</span> "
    + escapeExpression(((helper = (helper = helpers.prisoner || (depth0 != null ? depth0.prisoner : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"prisoner","hash":{},"data":data}) : helper)))
    + "!</div>\n  </div>\n  <div class=\"timestamps\">\n    <div class=\"last-move\">";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.isMyTurn : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "&nbsp;"
    + escapeExpression(((helper = (helper = helpers.timestamp || (depth0 != null ? depth0.timestamp : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"timestamp","hash":{},"data":data}) : helper)))
    + "</div>\n    <div class=\"timed\">";
  stack1 = helpers.unless.call(depth0, ((stack1 = (depth0 != null ? depth0.game : depth0)) != null ? stack1.is_timed : stack1), {"name":"unless","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</div>\n  </div>\n</li>\n\n";
},"useData":true});
templates['game_no_my_moves'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "\n<li class=\"none-waiting\">\n  <div class=\"image\"><img src=\"http://www.gravatar.com/avatar/"
    + escapeExpression(((helper = (helper = helpers.hash || (depth0 != null ? depth0.hash : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"hash","hash":{},"data":data}) : helper)))
    + "?s=80&d=monsterid\"></div>\n  <div class=\"text\">\n    <div>Capture some prisoners.</div>\n    <div>Join a game!</div>\n  </div>\n</li>\n\n";
},"useData":true});
templates['game_no_their_moves'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "\n<li class=\"none-waiting\">\n  <div class=\"image\"><img src=\"http://www.gravatar.com/avatar/"
    + escapeExpression(((helper = (helper = helpers.hash || (depth0 != null ? depth0.hash : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"hash","hash":{},"data":data}) : helper)))
    + "?s=80&d=monsterid\"></div>\n  <div class=\"text\">\n    <div>You have no games waiting on others.</div>\n    <div>Join a game!</div>\n  </div>\n</li>\n\n";
},"useData":true});
templates['men'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "\n<div id=\""
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"men\", style=\"top: "
    + escapeExpression(((helper = (helper = helpers.vpix || (depth0 != null ? depth0.vpix : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"vpix","hash":{},"data":data}) : helper)))
    + "px; left: "
    + escapeExpression(((helper = (helper = helpers.hpix || (depth0 != null ? depth0.hpix : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"hpix","hash":{},"data":data}) : helper)))
    + "px;'\">\n  <div class=\"image\">\n    <img class=\"normal\" src=\"http://www.gravatar.com/avatar/"
    + escapeExpression(((helper = (helper = helpers.hash || (depth0 != null ? depth0.hash : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"hash","hash":{},"data":data}) : helper)))
    + "?s=80&d=monsterid\">\n  </div>\n</div>\n\n";
},"useData":true});
})();
(function(){

  'use strict';

   app.UserLogin = Backbone.Model.extend({

    url: 'https://baja-checkers.herokuapp.com/users',
    idAttribute: '_id',

    initialize: function(){

    },

    defaults: {

      user:{
      email: '',
      password: '',
      username: '',
      }

    },


  });


}());


(function () {
  'use strict';

  app.Game = Backbone.Model.extend({

    initialize: function () {
      var letterBoard = this.mapLetters(this.attributes.game.board);
      this.attributes.game.board = letterBoard;
    },

    defaults: {
      game: {
        board: [
          [' ','1',' ','1',' ','1',' ','1'],

          ['1',' ','1',' ','1',' ','1',' '],

          [' ','1',' ','1',' ','1',' ','1'],

          [' ',' ',' ',' ',' ',' ',' ',' '],

          [' ',' ',' ',' ',' ',' ',' ',' '],

          ['2',' ','2',' ','2',' ','2',' '],

          [' ','2',' ','2',' ','2',' ','2'],

          ['2',' ','2',' ','2',' ','2',' ']
        ],
        finished: null,
        id: 0,
        turn_counter: 0,
        updated_at: "2010-12-31T15:00:50.027Z",
        game_log: [],
        dull_move_counter: 0,
        is_timed: false
      },
      player1: {
        id: 1,
        username: "player1"
      },
      // player2: {
      //   id: 2,
      //   username: "player2"
      // }
    },

    // Make 2D board array easier to understand by using letters.
    mapLetters: function (board) {
      var letterRow,
          letterBoard = [];
      board.forEach(function (row) {
        letterRow = row.map(function (cell) {
          if (cell === 1) return 'M';
          if (cell === 2) return 'm';
          if (cell === 3) return 'K';
          if (cell === 4) return 'k';
          return ' ';
        });
        letterBoard.push(letterRow);
      });
      return letterBoard;
    }

  });

}());



(function () {
  'use strict';

  // TODO: Swap out this token for app.user.token when it comes available.

  var token = 'ursXYhG-AeFxxk8NCzvk';

  app.Games = Backbone.Collection.extend({

    model: app.Game,

    url: 'https://baja-checkers.herokuapp.com/games?auth_token=' + token

  });


}());


(function(){

  'use strict';





  app.LoginView = Backbone.View.extend({

    el: '.login',

    // className: 'loginForm',

    template: $('#loginTemp').html(),

    events: {
      'click #subBtn': 'createUser'
    },

    initialize: function(){
      this.render();

    },

    render: function () {
      this.$el.html(this.template);
      console.log('render');
    },


    createUser: function(e){
      var self = this;
      e.preventDefault();


      var loginValUser = this.$el.find('input#username').val();
      var loginValPassword = this.$el.find('input#password').val();
      var loginValEmail = this.$el.find('input#email').val();
      var user = {user:{username: loginValUser, email: loginValEmail, password: loginValPassword}};

      var a = new app.UserLogin(user);
      a.save().done(function(data){
        console.log(data);
        elem.reset();
      });



    },

  });

}());


(function () {
  'use strict';

  var countPrisoners = function (board, player1IsMe) {
    var i, j,
        freeMenCount = 0;
    board.forEach(function (row) {
      row.forEach(function (cell) {
        if (player1IsMe) {
          if (cell === 'M' || cell === 'K') {
            freeMenCount++;
          }
        } else {
          if (cell === 'm' || cell === 'k') {
            freeMenCount++;
          }
        }
      });
    });
    return (12 - freeMenCount);
  };

  var filterGamesList = function (self, obj) {

    return self.collection.filter(function (game) {

      obj.isOddTurn = game.attributes.game.turn_counter % 2 == 1;
      obj.isEvenTurn = !obj.isOddTurn;

      // TODO: Swap out app.username for ?app.user.username? once that is exposed.

      obj.player1IsMe = game.attributes.player1.username === app.username;
      obj.player2IsMe = !obj.player1IsMe;

      // TODO: I may need to flip player1IsMe with player2IsMe
      // depending on how server handles the game startup.
      obj.isMyTurn = obj.isOddTurn && obj.player1IsMe ||
                     obj.isEvenTurn && obj.player2IsMe;

      return (self.myMoves) ? obj.isMyTurn : !obj.isMyTurn;
    });
  };

  var addProps = function (filteredGamesList, obj, view) {

    var opponentUsername, hash, opponent, prisonCount, prisoner, timestamp;

    filteredGamesList.forEach(function (game) {

      opponentUsername = obj.player1IsMe ? game.attributes.player2.username : game.attributes.player1.username;
      hash = CryptoJS.MD5(opponentUsername).toString();
      game.set('hash', hash);

      opponent = obj.player1IsMe ? game.attributes.player2.username : game.attributes.player1.username;
      game.set('opponent', opponent);

      prisonCount = countPrisoners(game.attributes.game.board, obj.player1IsMe);
      game.set('prisonCount', prisonCount || 'NO');

      prisoner = utils.pluralize('prisoner', prisonCount);
      game.set('prisoner', prisoner);

      game.set('isMyTurn', obj.isMyTurn);

      timestamp = moment(game.attributes.game.updated_at).fromNow();
      game.set('timestamp', timestamp);

      view.$el.append(view.template(game.attributes));
    });

  };

  var render = function () {
    var self = this,
        obj = {};
    this.$el.empty();
    this.collection.fetch().done(function () {
      var filteredGamesList = filterGamesList(self, obj);

      if (filteredGamesList.length > 0) {
        addProps(filteredGamesList, obj, self);
      } else {
        self.$el.append(self.templateNoMoves(game.attributes));
      }
    });
  };

  var launchGame = function (e) {
    console.log('Clicked to launch game.')
    var game = app.games.find(function (game) {
      return game.attributes.game.id == e.currentTarget.id;
    });
    app.menView = new app.MenView(game);
    app.boardView = new app.BoardView();
  };


  app.MyMovesView = Backbone.View.extend({

    tagName: 'ul',
    className: 'games',

    template: Handlebars.templates.game,
    templateNoMoves: Handlebars.templates.game_no_my_moves,

    events: {
      'click li': 'clicked'
    },

    initialize: function (collection) {
      this.collection = collection;
      this.render();
      this.myMoves = true;

      $('.games-wrapper').append('<h2 id="myTurn">Your Move</h2>').append(this.el);
    },

    render: render,

    clicked: launchGame

  });


  app.TheirMovesView = Backbone.View.extend({

    tagName: 'ul',
    className: 'games',

    template: Handlebars.templates.game,
    templateNoMoves: Handlebars.templates.game_no_their_moves,

    events: {
      'click li': 'clicked'
    },

    initialize: function (collection) {
      this.collection = collection;
      this.render();
      this.myMoves = false;

      $('.games-wrapper').append('<h2 id="theirTurn">Their Move</h2>').append(this.el);
    },

    render: render,

    clicked: launchGame

  });

}());



(function () {
  'use strict';

  app.BoardView = Backbone.View.extend({

    className: 'board-background',

    events: {
      'click span': 'clicked'  // Listen for clicks on open board squares.
    },

    initialize: function () {
      $('.board').append(this.el);
      this.render();
    },

    render: function () {
      var isOdd = utils.isOdd;
      for (var row = 0; row < 8; row++) {
        var rowDiv = this.el.appendChild(document.createElement('div'));
        rowDiv.className = 'board-row';
        for (var col = 0; col < 8; col++) {
          var cellSpan = rowDiv.appendChild(document.createElement('span'));
          cellSpan.className = 'board-cell';
          if (isOdd(row) && !isOdd(col) || !isOdd(row) && isOdd(col)) {
            cellSpan.id = String(row) + String(col);
          }
        }
      }
    },

    clicked: function (e) {
      // Step 1 of move is to select the man to move.  The men.view listen
      // function listens for this initial selection.
      try {
        this.startLoc = $('.men').filter('.active')[0].id;
      }
      catch (event) {}

      // Step 2 is to select the open board square to move to.
      // This is only allowed if Step 1 is complete.
      if (this.startLoc) {
        var endEl = $(e.target);
        this.endLoc = endEl[0].id;
        // Send start and end location to a validator and process the move.

        console.log(this.isvalidSlide(1));
        this.isvalidHopTwo();

        console.log(this);

        // Adding the background color may not be needed?
        $('span.board-cell').removeClass('active');
        endEl.addClass('active');
      }
    },

    // Break out the x,y coordinates of the start and end locations.
    coords: function () {
      return {x1: Number(this.startLoc[0]), y1: Number(this.startLoc[1]),
              x2: Number(this.endLoc[0]),   y2: Number(this.endLoc[1])};
    },

    // Check for a valid one-position diagonal slide move.
    isvalidSlide: function (n) {
      var c = this.coords(),
          isValidX = Math.abs(c.x1 - c.x2) === n,
          isValidY = Math.abs(c.y1 - c.y2) === n;
      return (isValidX && isValidY) ? true : false;
    },

    // Check for a valid two-position diagonal hop move.
    isvalidHopTwo: function () {
      // Check for valid 2 posn move.
      if (isvalidSlide(2)) {};
      // Check if opponent in the middle spot.

    }

  });

}());



(function () {
  'use strict';

  app.MenView = Backbone.View.extend({

    template: Handlebars.templates.men,

    initialize: function (model) {
      this.model = model;
      this.renderMen();
      this.listen();
    },

    renderMen: function () {
      var self = this,
          board = this.model.attributes.game.board;

      board.forEach(function (row, r) {
        row.forEach(function (cell, c) {
          if (cell === 'm' || cell === 'M') {
            if (cell === cell.toLowerCase()) {
              self.renderMan(r, c, 1); // player1
            } else {
              self.renderMan(r, c, 2); // player2
            }
          }
        });
      });
    },

    renderMan: function (r, c, player) {

      var username, hash;

      if (player === 1) {
        username = this.model.attributes.player1.username;
      } else {
        username = this.model.attributes.player2.username;
      }
      // This hash is used to generate the unique monster image.
      hash = CryptoJS.MD5(username).toString();

      var id = String(r) + String(c),
          pos = [r, c],
          squareSize = 60,
          vpix = pos[0] * squareSize,
          hpix = pos[1] * squareSize,
          man = {id: id, vpix: vpix, hpix: hpix, hash: hash};

      $('.board').prepend(this.template(man));
    },

    listen: function () {
      $('.game-wrapper').on('click', '.men', function (e) {
        var target = $(e.currentTarget);

        // Check that this is my man?  If it is, then proceed...

        if (target.hasClass('active')) {
          target.removeClass('active');
        } else {
          $('.men').removeClass('active');
          target.addClass('active');
        }
      });
    }

  });

}());



(function () {
  'use strict';

  app.login = new app.LoginView();

  app.games = new app.Games();

  // TODO: This is really inefficient - making 2 RPC calls for the same
  // data in order to populate the "Your Move" list and then again for
  // the "Their Move" list.  Needs to be optimized later.
  app.myMovesView = new app.MyMovesView(app.games);
  app.theirMovesView = new app.TheirMovesView(app.games);

}());

