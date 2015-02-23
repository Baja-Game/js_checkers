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
templates['user_signin'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "\n<form id=\"signinForm\" action=\"/\">\n  <h1>Sign In</h1>\n  <input type=\"email\" placeholder=\"Email\" id=\"email\" />\n  <input type=\"password\" placeholder=\"Password\" id=\"password\" />\n  <input type=\"button\" value=\"Capture some monsters...\" id=\"signinButton\" />\n</form>\n\n";
  },"useData":true});
templates['user_signup'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "\n<form id=\"signupForm\" action=\"/\">\n  <h1>Sign Up</h1>\n  <input type=\"email\" placeholder=\"Email\" id=\"email\" />\n  <input type=\"password\" placeholder=\"Password\" id=\"password\" />\n  <input type=\"text\" placeholder=\"Username\" id=\"username\" />\n  <input type=\"button\" value=\"Capture some monsters...\" id=\"signupButton\">\n</form>\n\n";
  },"useData":true});
})();