(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['board'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "\n\n";
  },"useData":true});
templates['game'] = template({"1":function(depth0,helpers,partials,data) {
  return "<i class=\"fa fa-spinner fa-pulse\"></i>";
  },"3":function(depth0,helpers,partials,data) {
  return "<i class=\"fa fa-clock-o\"></i>";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "\n<li>\n  <div class=\"image\"><img src=\"http://www.gravatar.com/avatar/"
    + escapeExpression(((helper = (helper = helpers.hash || (depth0 != null ? depth0.hash : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"hash","hash":{},"data":data}) : helper)))
    + "?s=200&d=monsterid\" alt=\"\"></div>\n  <div class=\"text\">\n    <div class=\"opponent-name\">"
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
templates['games_list'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "\n\n  <table class=\"table table-hover\">\n    <thead>\n      <th>\n        <td>Game ID</td>\n        <td>Opponent</td>\n        <td>Last Move</td>\n        <td>Prisoners</td>\n        <td>Timed Game?</td>\n      </th>\n    </thead>\n    <tbody>\n      <tr>\n        <td>"
    + escapeExpression(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_id","hash":{},"data":data}) : helper)))
    + "</td>\n        <td>"
    + escapeExpression(((helper = (helper = helpers.opponent || (depth0 != null ? depth0.opponent : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"opponent","hash":{},"data":data}) : helper)))
    + "</td>\n        <td>"
    + escapeExpression(((helper = (helper = helpers.lastMoveTime || (depth0 != null ? depth0.lastMoveTime : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"lastMoveTime","hash":{},"data":data}) : helper)))
    + "</td>\n        <td>"
    + escapeExpression(((helper = (helper = helpers.myPrisonCount || (depth0 != null ? depth0.myPrisonCount : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"myPrisonCount","hash":{},"data":data}) : helper)))
    + "</td>\n        <td>"
    + escapeExpression(((helper = (helper = helpers.isTimed || (depth0 != null ? depth0.isTimed : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"isTimed","hash":{},"data":data}) : helper)))
    + "</td>\n      </tr>\n    </tbody>\n  </table>\n";
},"useData":true});
templates['games_table'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "\n<div>\n  <h3>My Move</h3>\n  <table class=\"table table-hover\">\n    <thead>\n      <tr>\n        <th>Opponent</th>\n        <th>Last Move</th>\n        <th>Prisoners</th>\n        <th>Timed Game?</th>\n      </tr>\n    </thead>\n    <tbody id=\"myMove\"></tbody>\n  </table>\n</div>\n\n<div>\n  <h3>Waiting on Opponent</h3>\n  <table class=\"table table-hover\">\n    <thead>\n      <tr>\n        <th>Opponent</th>\n        <th>Last Move</th>\n        <th>Prisoners</th>\n        <th>Timed Game?</th>\n      </tr>\n    </thead>\n    <tbody id=\"opponentMove\"></tbody>\n  </table>\n</div>\n\n";
  },"useData":true});
templates['games_table_my_moves_data'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "\n<tr>\n  <td>Joe Blow</td>\n  <td>2 days ago</td>\n  <td>"
    + escapeExpression(((helper = (helper = helpers.myPrisonCount || (depth0 != null ? depth0.myPrisonCount : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"myPrisonCount","hash":{},"data":data}) : helper)))
    + "</td>\n  <td>"
    + escapeExpression(((helper = (helper = helpers.isTimed || (depth0 != null ? depth0.isTimed : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"isTimed","hash":{},"data":data}) : helper)))
    + "</td>\n</tr>\n\n";
},"useData":true});
})();