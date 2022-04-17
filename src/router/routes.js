
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { 
        path: '/', component: () => import('pages/Index.vue') 
      },
      { 
        path: '/cart', component: () => import('pages/Cart.vue') 
      },
      { 
        path: '/contact', component: () => import('pages/Contact.vue') 
      },
      { 
        path: '/faq', component: () => import('pages/Faq.vue') 
      },
      { 
        path: '/gallery', component: () => import('pages/Gallery.vue') 
      },
      { 
        path: '/checkout', component: () => import('pages/Checkout.vue') 
      },
      { 
        path: '/category', component: () => import('pages/Category.vue') 
      },
      { 
        path: '/shop', component: () => import('pages/Shop.vue') 
      },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
