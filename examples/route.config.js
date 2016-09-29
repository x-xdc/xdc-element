import navConfig from './nav.config.json';
import navWapConfig from './nav.wap.config.json';

const registerRoute = (config1, config2) => {
  let route = [{
    path: '/component',
    redirect: '/component/quickstart',
    component: require('./pages/component.vue'),
    children: []
  }, {
    path: '/wapcomponent',
    redirect: '/wapcomponent/quickstart',
    component: require('./pages/wap/component-wap.vue'),
    children: []
  }];
  function addRoute(page) {
    const component = page.path === '/changelog' ? require('./pages/changelog.vue') : require(`./docs${page.path}.md`);
    let child = {
      path: page.path.slice(1),
      meta: {
        title: page.title || page.name,
        description: page.description
      },
      component: component.default || component
    };

    route[0].children.push(child);
  }
  function addRoute2(page) {
    const component = page.path === '/changelog' ? require('./pages/wap/changelog-wap.vue') : require(`./docs/wap${page.path}.md`);
    let child = {
      path: page.path.slice(1),
      meta: {
        title: page.title || page.name,
        description: page.description
      },
      component: component.default || component
    };

    route[1].children.push(child);
  }
  config1
    .map(nav => {
      if (nav.groups) {
        nav.groups.map(group => {
          group.list.map(page => {
            addRoute(page);
          });
        });
      } else if (nav.children) {
        nav.children.map(page => {
          addRoute(page);
        });
      } else {
        addRoute(nav);
      }
    });
  config2
    .map(nav => {
      if (nav.groups) {
        nav.groups.map(group => {
          group.list.map(page => {
            addRoute2(page);
          });
        });
      } else if (nav.children) {
        nav.children.map(page => {
          addRoute2(page);
        });
      } else {
        addRoute2(nav);
      }
    });
  return { route, navs: config1, wapnavs: config2};
};

const route = registerRoute(navConfig, navWapConfig);
let guideRoute = {
  path: '/guide',
  name: '指南',
  redirect: '/guide/design',
  component: require('./pages/guide.vue'),
  children: [{
    path: 'design',
    name: '设计原则',
    component: require('./pages/design.vue')
  }, {
    path: 'nav',
    name: '导航',
    component: require('./pages/nav.vue')
  }]
};

let resourceRoute = {
  path: '/resource',
  name: '资源',
  component: require('./pages/resource.vue')
};

let indexRoute = {
  path: '/',
  name: '首页',
  component: require('./pages/index.vue')
};

// wap端路由

let wapRoute = {
  path: '/wap',
  name: 'wap首页',
  component: require('./pages/wap/index-wap.vue')
};
let wapResourceRoute = {
  path: '/wapresource',
  name: '资源',
  component: require('./pages/wap/resource-wap.vue')
};
let wapGuideRoute = {
  path: '/wapguide',
  name: '指南',
  redirect: '/wapguide/design',
  component: require('./pages/wap/guide-wap.vue'),
  children: [{
    path: 'design',
    name: '设计原则',
    component: require('./pages/wap/design-wap.vue')
  }, {
    path: 'nav',
    name: '导航',
    component: require('./pages/wap/nav-wap.vue')
  }]
};
route.route = route.route.concat([guideRoute, resourceRoute, indexRoute, wapRoute, wapResourceRoute, wapGuideRoute]);

route.route.push({
  path: '*',
  component: require('./docs/home.md')
});
export const navs = route.navs;
export const wapnavs = route.wapnavs;
export default route.route;
