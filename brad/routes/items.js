const { getItems, getItem } = require('../controllers/items')

// Tiem schema
const Item = {
  type: 'object',
  properties: {
    id: { type: 'string' },
    name: { type: 'string' }
  }
}

// Options for get all items
const getItemsOpts = {
  schemas: {
    response: {
      200: {
        type: 'array',
        items: Item
      }
    }
  },
  handler: getItems
}

// Options for get all items
const getItemOpts = {
  schemas: {
    response: {
      200: Item
    }
  },
  handler: getItem
}

function itemRoutes(fastify, options, done) {
  // Get all items
  fastify.get('/items', getItemsOpts)

  // Get single items
  fastify.get('/items/:id', getItemOpts)

  done()
}

module.exports = itemRoutes
