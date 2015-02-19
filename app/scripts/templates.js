(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
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
  return "\n<div>\n  <h3>My Move</h3>\n  <table class=\"table table-hover\">\n    <thead>\n      <tr>\n        <th>Opponent</th>\n        <th>Last Move</th>\n        <th>Prisoners</th>\n        <th>Timed Game?</th>\n      </tr>\n    </thead>\n    <tbody id=\"myMove\">\n    </tbody>\n  </table>\n</div>\n\n<div>\n  <h3>Waiting on Opponent</h3>\n  <table class=\"table table-hover\">\n    <thead>\n      <th>\n        <td>Opponent</td>\n        <td>Last Move</td>\n        <td>Prisoners</td>\n        <td>Timed Game?</td>\n      </th>\n    </thead>\n    <tbody>\n      <tr id=\"opponentMove\"></tr>\n    </tbody>\n  </table>\n</div>\n\n";
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