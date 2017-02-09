import { getAsyncInjectors } from 'utils/asyncInjectors';
import { refreshToken, clearToken } from 'utils/tokenManager';

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};

const localStorage = global.window.localStorage;
const checkNRefreshToken = (isDashboard) => (nextState, replace, callback) => {
  if (localStorage.access_token && Date.now() < localStorage.expires_in - 10000) {
    if (isDashboard) {
      replace('/home');
    }
    return callback();
  }

  if (!localStorage.refresh_token) {
    if (window.location.pathname !== '/') {
      replace('/');
    }
    callback();
  } else {
    refreshToken()
      .then(() => {
        if (isDashboard) {
          replace('/home');
        }
        callback();
      })
      .catch((error) => {
        if (error.data.status_code === 400) {
          clearToken();
        }
        replace('/');
        callback(error);
      });
  }
  return true;
};


export default function createRoutes(store) {
  // Create reusable async injectors using getAsyncInjectors factory
  const { injectReducer, injectSagas } = getAsyncInjectors(store); // eslint-disable-line no-unused-vars

  return [
    {
      path: '/',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/Dashboard'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([component]) => {
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
      childRoutes: [
        {
          indexRoute: {
            getComponent(nextState, cb) {
              const importModules = Promise.all([
                System.import('containers/HomePage'),
              ]);

              const renderRoute = loadModule(cb);

              importModules.then(([component]) => {
                renderRoute(component);
              });

              importModules.catch(errorLoading);
            },
          },
        },
        {
          path: '/home',
          getComponent(nextState, cb) {
            const importModules = Promise.all([
              System.import('containers/HomePage'),
            ]);

            const renderRoute = loadModule(cb);

            importModules.then(([component]) => {
              renderRoute(component);
            });

            importModules.catch(errorLoading);
          },
          childRoutes: [
            {
              path: '/home/findmusic',
              getComponent(nextState, cb) {
                const importModules = Promise.all([
                  System.import('containers/FindMusic'),
                ]);

                const renderRoute = loadModule(cb);

                importModules.then(([component]) => {
                  renderRoute(component);
                });

                importModules.catch(errorLoading);
              },
            },
            {
              path: '/home/privateFM',
              getComponent(nextState, cb) {
                const importModules = Promise.all([
                  System.import('containers/PrivateFM'),
                ]);

                const renderRoute = loadModule(cb);

                importModules.then(([component]) => {
                  renderRoute(component);
                });

                importModules.catch(errorLoading);
              },
            },
          ],
        },
      ],
    },
    {
      path: '*',
      name: 'notfound',
      getComponent(nextState, cb) {
        System.import('containers/NotFoundPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
  ];
}
