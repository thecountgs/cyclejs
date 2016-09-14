declare function require(s: string): any;
import ClassModule = require('snabbdom/modules/class');
import PropsModule = require('snabbdom/modules/props');
import AttrsModule = require('snabbdom/modules/attributes');
import EventsModule = require('snabbdom/modules/eventlisteners');
import StyleModule = require('snabbdom/modules/style');
import HeroModule = require('snabbdom/modules/hero');

export default [StyleModule, ClassModule, PropsModule, AttrsModule];

export {
  StyleModule, ClassModule,
  PropsModule, AttrsModule,
  HeroModule, EventsModule,
}
