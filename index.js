// Generated by LiveScript 1.4.0
(function(){
  var React, process, ref$, out$ = typeof exports != 'undefined' && exports || this;
  React = require('react');
  process = function(){
    var a;
    a = [];
    if (arguments[0][1] !== undefined) {
      a = Array.prototype.slice.call(arguments[0], 1);
    } else {
      a = Array.prototype.slice.call(arguments[0], 2);
      a.shift(arguments[0][1]);
    }
    if (arguments[0][0][0] !== undefined) {
      a.unshift(arguments[0][0][0]);
    } else {
      a.unshift(null);
    }
    return a;
  };
  ref$ = out$;
  ref$.React = React;
  ref$.Component = React.Component;
  ref$.io = function(component){
    if (typeof component === 'object') {
      component = React.createClass(component);
    }
    return function(){
      return React.createFactory(component).apply(this, process(arguments));
    };
  };
  ref$.type = {
    any: React.PropTypes.any,
    array: React.PropTypes.array,
    arrayOf: React.PropTypes.arrayOf,
    bool: React.PropTypes.bool,
    element: React.PropTypes.element,
    func: React.PropTypes.func,
    instanceOf: React.PropTypes.instanceOf,
    node: React.PropTypes.node,
    number: React.PropTypes.number,
    object: React.PropTypes.object,
    objectOf: React.PropTypes.objectOf,
    oneOf: React.PropTypes.oneOf,
    oneOfType: React.PropTypes.oneOfType,
    shape: React.PropTypes.shape,
    string: React.PropTypes.string
  };
  ref$.a = function(){
    return React.DOM.a.apply(this, process(arguments));
  };
  ref$.abbr = function(){
    return React.DOM.abbr.apply(this, process(arguments));
  };
  ref$.address = function(){
    return React.DOM.address.apply(this, process(arguments));
  };
  ref$.area = function(){
    return React.DOM.area.apply(this, process(arguments));
  };
  ref$.article = function(){
    return React.DOM.article.apply(this, process(arguments));
  };
  ref$.aside = function(){
    return React.DOM.aside.apply(this, process(arguments));
  };
  ref$.audio = function(){
    return React.DOM.audio.apply(this, process(arguments));
  };
  ref$.b = function(){
    return React.DOM.b.apply(this, process(arguments));
  };
  ref$.base = function(){
    return React.DOM.base.apply(this, process(arguments));
  };
  ref$.bdi = function(){
    return React.DOM.bdi.apply(this, process(arguments));
  };
  ref$.bdo = function(){
    return React.DOM.bdo.apply(this, process(arguments));
  };
  ref$.big = function(){
    return React.DOM.big.apply(this, process(arguments));
  };
  ref$.blockquote = function(){
    return React.DOM.blockquote.apply(this, process(arguments));
  };
  ref$.body = function(){
    return React.DOM.body.apply(this, process(arguments));
  };
  ref$.br = function(){
    return React.DOM.br.apply(this, process(arguments));
  };
  ref$.button = function(){
    return React.DOM.button.apply(this, process(arguments));
  };
  ref$.canvas = function(){
    return React.DOM.canvas.apply(this, process(arguments));
  };
  ref$.caption = function(){
    return React.DOM.caption.apply(this, process(arguments));
  };
  ref$.cite = function(){
    return React.DOM.cite.apply(this, process(arguments));
  };
  ref$.code = function(){
    return React.DOM.code.apply(this, process(arguments));
  };
  ref$.col = function(){
    return React.DOM.col.apply(this, process(arguments));
  };
  ref$.colgroup = function(){
    return React.DOM.colgroup.apply(this, process(arguments));
  };
  ref$.data = function(){
    return React.DOM.data.apply(this, process(arguments));
  };
  ref$.datalist = function(){
    return React.DOM.datalist.apply(this, process(arguments));
  };
  ref$.dd = function(){
    return React.DOM.dd.apply(this, process(arguments));
  };
  ref$.del = function(){
    return React.DOM.del.apply(this, process(arguments));
  };
  ref$.details = function(){
    return React.DOM.details.apply(this, process(arguments));
  };
  ref$.dfn = function(){
    return React.DOM.dfn.apply(this, process(arguments));
  };
  ref$.dialog = function(){
    return React.DOM.dialog.apply(this, process(arguments));
  };
  ref$.aside = function(){
    return React.DOM.aside.apply(this, process(arguments));
  };
  ref$.div = function(){
    return React.DOM.div.apply(this, process(arguments));
  };
  ref$.dl = function(){
    return React.DOM.dl.apply(this, process(arguments));
  };
  ref$.dt = function(){
    return React.DOM.dt.apply(this, process(arguments));
  };
  ref$.em = function(){
    return React.DOM.em.apply(this, process(arguments));
  };
  ref$.embed = function(){
    return React.DOM.embed.apply(this, process(arguments));
  };
  ref$.fieldset = function(){
    return React.DOM.fieldset.apply(this, process(arguments));
  };
  ref$.figcaption = function(){
    return React.DOM.figcaption.apply(this, process(arguments));
  };
  ref$.figure = function(){
    return React.DOM.figure.apply(this, process(arguments));
  };
  ref$.footer = function(){
    return React.DOM.footer.apply(this, process(arguments));
  };
  ref$.form = function(){
    return React.DOM.form.apply(this, process(arguments));
  };
  ref$.h1 = function(){
    return React.DOM.h1.apply(this, process(arguments));
  };
  ref$.h2 = function(){
    return React.DOM.h2.apply(this, process(arguments));
  };
  ref$.h3 = function(){
    return React.DOM.h3.apply(this, process(arguments));
  };
  ref$.h4 = function(){
    return React.DOM.h4.apply(this, process(arguments));
  };
  ref$.h5 = function(){
    return React.DOM.h5.apply(this, process(arguments));
  };
  ref$.h6 = function(){
    return React.DOM.h6.apply(this, process(arguments));
  };
  ref$.head = function(){
    return React.DOM.head.apply(this, process(arguments));
  };
  ref$.header = function(){
    return React.DOM.header.apply(this, process(arguments));
  };
  ref$.hr = function(){
    return React.DOM.hr.apply(this, process(arguments));
  };
  ref$.html = function(){
    return React.DOM.html.apply(this, process(arguments));
  };
  ref$.i = function(){
    return React.DOM.i.apply(this, process(arguments));
  };
  ref$.iframe = function(){
    return React.DOM.iframe.apply(this, process(arguments));
  };
  ref$.img = function(){
    return React.DOM.img.apply(this, process(arguments));
  };
  ref$.input = function(){
    return React.DOM.input.apply(this, process(arguments));
  };
  ref$.ins = function(){
    return React.DOM.ins.apply(this, process(arguments));
  };
  ref$.kbd = function(){
    return React.DOM.kbd.apply(this, process(arguments));
  };
  ref$.keygen = function(){
    return React.DOM.keygen.apply(this, process(arguments));
  };
  ref$.label = function(){
    return React.DOM.label.apply(this, process(arguments));
  };
  ref$.legend = function(){
    return React.DOM.legend.apply(this, process(arguments));
  };
  ref$.li = function(){
    return React.DOM.li.apply(this, process(arguments));
  };
  ref$.link = function(){
    return React.DOM.link.apply(this, process(arguments));
  };
  ref$.main = function(){
    return React.DOM.main.apply(this, process(arguments));
  };
  ref$.map = function(){
    return React.DOM.map.apply(this, process(arguments));
  };
  ref$.menu = function(){
    return React.DOM.menu.apply(this, process(arguments));
  };
  ref$.menuitem = function(){
    return React.DOM.menuitem.apply(this, process(arguments));
  };
  ref$.meta = function(){
    return React.DOM.meta.apply(this, process(arguments));
  };
  ref$.meter = function(){
    return React.DOM.meter.apply(this, process(arguments));
  };
  ref$.nav = function(){
    return React.DOM.nav.apply(this, process(arguments));
  };
  ref$.noscript = function(){
    return React.DOM.noscript.apply(this, process(arguments));
  };
  ref$.object = function(){
    return React.DOM.object.apply(this, process(arguments));
  };
  ref$.ol = function(){
    return React.DOM.ol.apply(this, process(arguments));
  };
  ref$.optgroup = function(){
    return React.DOM.optgroup.apply(this, process(arguments));
  };
  ref$.option = function(){
    return React.DOM.option.apply(this, process(arguments));
  };
  ref$.output = function(){
    return React.DOM.output.apply(this, process(arguments));
  };
  ref$.keypgen = function(){
    return React.p.keygen.apply(this, process(arguments));
  };
  ref$.p = function(){
    return React.DOM.p.apply(this, process(arguments));
  };
  ref$.param = function(){
    return React.DOM.param.apply(this, process(arguments));
  };
  ref$.picture = function(){
    return React.DOM.picture.apply(this, process(arguments));
  };
  ref$.pre = function(){
    return React.DOM.pre.apply(this, process(arguments));
  };
  ref$.progress = function(){
    return React.DOM.progress.apply(this, process(arguments));
  };
  ref$.q = function(){
    return React.DOM.q.apply(this, process(arguments));
  };
  ref$.rt = function(){
    return React.DOM.rt.apply(this, process(arguments));
  };
  ref$.ruby = function(){
    return React.DOM.ruby.apply(this, process(arguments));
  };
  ref$.s = function(){
    return React.DOM.s.apply(this, process(arguments));
  };
  ref$.samp = function(){
    return React.DOM.samp.apply(this, process(arguments));
  };
  ref$.script = function(){
    return React.DOM.script.apply(this, process(arguments));
  };
  ref$.section = function(){
    return React.DOM.section.apply(this, process(arguments));
  };
  ref$.select = function(){
    return React.DOM.select.apply(this, process(arguments));
  };
  ref$.small = function(){
    return React.DOM.small.apply(this, process(arguments));
  };
  ref$.source = function(){
    return React.DOM.source.apply(this, process(arguments));
  };
  ref$.strong = function(){
    return React.DOM.strong.apply(this, process(arguments));
  };
  ref$.style = function(){
    return React.DOM.style.apply(this, process(arguments));
  };
  ref$.sub = function(){
    return React.DOM.sub.apply(this, process(arguments));
  };
  ref$.summary = function(){
    return React.DOM.summary.apply(this, process(arguments));
  };
  ref$.sup = function(){
    return React.DOM.sup.apply(this, process(arguments));
  };
  ref$.table = function(){
    return React.DOM.table.apply(this, process(arguments));
  };
  ref$.tbody = function(){
    return React.DOM.tbody.apply(this, process(arguments));
  };
  ref$.td = function(){
    return React.DOM.td.apply(this, process(arguments));
  };
  ref$.textarea = function(){
    return React.DOM.textarea.apply(this, process(arguments));
  };
  ref$.tfoot = function(){
    return React.DOM.tfoot.apply(this, process(arguments));
  };
  ref$.th = function(){
    return React.DOM.th.apply(this, process(arguments));
  };
  ref$.thead = function(){
    return React.DOM.thead.apply(this, process(arguments));
  };
  ref$.time = function(){
    return React.DOM.time.apply(this, process(arguments));
  };
  ref$.title = function(){
    return React.DOM.title.apply(this, process(arguments));
  };
  ref$.tr = function(){
    return React.DOM.tr.apply(this, process(arguments));
  };
  ref$.track = function(){
    return React.DOM.track.apply(this, process(arguments));
  };
  ref$.u = function(){
    return React.DOM.u.apply(this, process(arguments));
  };
  ref$.ul = function(){
    return React.DOM.ul.apply(this, process(arguments));
  };
  ref$.video = function(){
    return React.DOM.video.apply(this, process(arguments));
  };
  ref$.wbr = function(){
    return React.DOM.wbr.apply(this, process(arguments));
  };
  ref$.circle = function(){
    return React.DOM.circle.apply(this, process(arguments));
  };
  ref$.clipPath = function(){
    return React.DOM.clipPath.apply(this, process(arguments));
  };
  ref$.defs = function(){
    return React.DOM.defs.apply(this, process(arguments));
  };
  ref$.ellipse = function(){
    return React.DOM.ellipse.apply(this, process(arguments));
  };
  ref$.g = function(){
    return React.DOM.g.apply(this, process(arguments));
  };
  ref$.line = function(){
    return React.DOM.line.apply(this, process(arguments));
  };
  ref$.linearGradient = function(){
    return React.DOM.linearGradient.apply(this, process(arguments));
  };
  ref$.mask = function(){
    return React.DOM.mask.apply(this, process(arguments));
  };
  ref$.path = function(){
    return React.DOM.path.apply(this, process(arguments));
  };
  ref$.pattern = function(){
    return React.DOM.pattern.apply(this, process(arguments));
  };
  ref$.polygon = function(){
    return React.DOM.polygon.apply(this, process(arguments));
  };
  ref$.polyline = function(){
    return React.DOM.polyline.apply(this, process(arguments));
  };
  ref$.radialGradient = function(){
    return React.DOM.radialGradient.apply(this, process(arguments));
  };
  ref$.rect = function(){
    return React.DOM.rect.apply(this, process(arguments));
  };
  ref$.stop = function(){
    return React.DOM.stop.apply(this, process(arguments));
  };
  ref$.svg = function(){
    return React.DOM.svg.apply(this, process(arguments));
  };
  ref$.text = function(){
    return React.DOM.text.apply(this, process(arguments));
  };
  ref$.tspan = function(){
    return React.DOM.tspan.apply(this, process(arguments));
  };
}).call(this);
