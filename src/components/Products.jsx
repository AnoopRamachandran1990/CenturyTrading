import { useState } from 'react'

// WhatsApp number that receives order requests.
// Format: country code + number, digits only, no "+", spaces or dashes (e.g. India: 91 + 10-digit mobile).
// Same as the contact number shown in the footer (+91 99402 16612).
const WHATSAPP_NUMBER = '919940216612'

// Placeholder prices in INR — edit to match the real price list.
const products = [
  {
    id: 'turmeric',
    name: 'Lakadong Turmeric',
    icon: '🟡',
    unit: '100g',
    price: 250,
    description: 'High-curcumin turmeric powder from Lakadong, Meghalaya.',
  },
  {
    id: 'black-pepper',
    name: 'Black Pepper',
    icon: '⚫',
    unit: '100g',
    price: 180,
    description: 'Bold, pungent whole peppercorns, hand-sorted.',
  },
  {
    id: 'honey',
    name: 'Wild Honey',
    icon: '🍯',
    unit: '500g jar',
    price: 450,
    description: 'Raw, unprocessed forest honey from Meghalaya.',
  },
  {
    id: 'ginger',
    name: 'Ginger',
    icon: '🫚',
    unit: '100g',
    price: 150,
    description: 'Sun-dried ginger with a warm, zesty bite.',
  },
  {
    id: 'cinnamon',
    name: 'Cinnamon',
    icon: '🪵',
    unit: '100g',
    price: 220,
    description: 'Fragrant cinnamon quills for sweet and savoury dishes.',
  },
  {
    id: 'bay-leaf',
    name: 'Bay Leaf',
    icon: '🌿',
    unit: '50g',
    price: 90,
    description: 'Aromatic dried bay leaves for curries and stews.',
  },
]

const formatINR = (n) => '₹' + n.toLocaleString('en-IN')

// Returns a copy of the cart without the given product (qty 0 = not in cart).
const withoutItem = (cart, id) => {
  const { [id]: _removed, ...rest } = cart
  return rest
}

export default function Products() {
  // productId -> quantity; products with quantity 0 are never stored.
  const [cart, setCart] = useState({})

  const increment = (id) => setCart((c) => ({ ...c, [id]: (c[id] || 0) + 1 }))

  const decrement = (id) =>
    setCart((c) => {
      const qty = c[id] || 0
      if (qty <= 1) return withoutItem(c, id)
      return { ...c, [id]: qty - 1 }
    })

  const remove = (id) => setCart((c) => withoutItem(c, id))

  const cartItems = products
    .filter((p) => cart[p.id] > 0)
    .map((p) => ({ ...p, qty: cart[p.id], lineTotal: p.price * cart[p.id] }))
  const itemCount = cartItems.reduce((sum, i) => sum + i.qty, 0)
  const grandTotal = cartItems.reduce((sum, i) => sum + i.lineTotal, 0)
  const isEmpty = cartItems.length === 0
  const itemLabel = itemCount === 1 ? 'item' : 'items'

  const buildMessage = () =>
    [
      'New order request from Century Trading website',
      '',
      ...cartItems.map(
        (i) => `- ${i.name} x ${i.qty} (${i.unit}) = ${formatINR(i.lineTotal)}`
      ),
      '',
      `Grand total (${itemCount} ${itemLabel}): ${formatINR(grandTotal)}`,
    ].join('\n')

  const handleWhatsApp = () => {
    if (isEmpty) return
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(buildMessage())}`
    window.open(url, '_blank', 'noopener')
  }

  return (
    <section className="products" id="products">
      <div className="container">
        <div className="section__head">
          <p className="section__eyebrow">Shop the harvest</p>
          <h2 className="section__title">Spices &amp; honey from Meghalaya</h2>
        </div>

        <div className="products__grid">
          {products.map((p) => {
            const qty = cart[p.id] || 0
            return (
              <article
                key={p.id}
                className={`product-card${qty > 0 ? ' product-card--selected' : ''}`}
              >
                <span className="product-card__icon" aria-hidden="true">
                  {p.icon}
                </span>
                <h3 className="product-card__title">{p.name}</h3>
                <p className="product-card__text">{p.description}</p>
                <p className="product-card__price">
                  {formatINR(p.price)} <span className="product-card__unit">/ {p.unit}</span>
                </p>
                <div className="product-card__controls">
                  <div className="qty" role="group" aria-label={`Quantity of ${p.name}`}>
                    <button
                      type="button"
                      className="qty__btn"
                      aria-label={`Decrease quantity of ${p.name}`}
                      aria-describedby={`qty-${p.id}`}
                      disabled={qty === 0}
                      onClick={() => decrement(p.id)}
                    >
                      −
                    </button>
                    <span id={`qty-${p.id}`} className="qty__value">{qty}</span>
                    <button
                      type="button"
                      className="qty__btn"
                      aria-label={`Increase quantity of ${p.name}`}
                      aria-describedby={`qty-${p.id}`}
                      onClick={() => increment(p.id)}
                    >
                      +
                    </button>
                  </div>
                  <button
                    type="button"
                    className="product-card__remove"
                    aria-label={`Remove ${p.name} from cart`}
                    disabled={qty === 0}
                    onClick={() => remove(p.id)}
                  >
                    <span aria-hidden="true">🗑</span>
                  </button>
                </div>
              </article>
            )
          })}
        </div>

        <aside className="cart" aria-labelledby="cart-title">
          <h3 id="cart-title" className="cart__title">
            Your order
          </h3>
          <div className="cart__body" aria-live="polite">
            {isEmpty ? (
              <p className="cart__empty">
                Your cart is empty. Use the + buttons above to add products.
              </p>
            ) : (
              <>
                <ul className="cart__list">
                  {cartItems.map((i) => (
                    <li key={i.id} className="cart__item">
                      <span className="cart__item-name">
                        {i.name} × {i.qty}{' '}
                        <span className="cart__item-unit">({i.unit})</span>
                      </span>
                      <span className="cart__item-total">{formatINR(i.lineTotal)}</span>
                    </li>
                  ))}
                </ul>
                <div className="cart__totals">
                  <span>
                    {itemCount} {itemLabel}
                  </span>
                  <span className="cart__grand">Total: {formatINR(grandTotal)}</span>
                </div>
              </>
            )}
          </div>
          <button
            type="button"
            className="btn btn--whatsapp cart__whatsapp"
            disabled={isEmpty}
            onClick={handleWhatsApp}
          >
            <span aria-hidden="true">💬</span> Order on WhatsApp
          </button>
          <p className="cart__note">
            Opens WhatsApp with your order pre-filled. Prices are indicative and confirmed on chat.
          </p>
        </aside>
      </div>
    </section>
  )
}
