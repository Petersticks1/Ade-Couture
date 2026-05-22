import type { CartItem } from '../types';

export const WA_NUMBER = '2348102042019';

export const formatPrice = (price: number): string =>
  `₦${price.toLocaleString('en-NG')}`;

export function buildOrderMessage(items: CartItem[], note?: string): string {
  const lines = items.map((item, i) =>
    `${i + 1}. ${item.product.name}\n   Size: ${item.size} | Qty: ${item.quantity} | ${formatPrice(item.product.price * item.quantity)}`
  );

  const subtotal = items.reduce((sum, i) => sum + i.product.price * i.quantity, 0);

  let message = `Hello Ade's Couture! 👗 I'd like to place an order:\n\n${lines.join('\n\n')}\n\n🧾 Subtotal: ${formatPrice(subtotal)}`;
  if (note?.trim()) message += `\n📝 Note: ${note.trim()}`;
  message += `\n\n*(Please attach a screenshot of the items you ordered so we can easily verify!)*\n\nPlease confirm availability and payment details. Thank you!`;

  return message;
}

export function buildInquiryMessage(productName?: string): string {
  if (productName) {
    return `Hello Ade's Couture! I'd like to inquire about this piece: *${productName}* 👗\n\n*(Please attach a screenshot of the item here so we can see exactly what you want!)*`;
  }
  return `Hello Ade's Couture! I'd like to inquire about your collection. 👗`;
}

export function buildCustomDesignMessage(data: Record<string, string>): string {
  return `Hello Ade's Couture! I'd like to request a custom design 👗

Name: ${data.name}
Type: ${data.clothingType}
Gender: ${data.gender}
Design Description: ${data.description}
Budget: ${data.budget}
Timeline: ${data.timeline}
Fabric Preference: ${data.fabric || 'Not specified'}
Contact Preference: ${data.contactMethod}

Please get back to me to discuss further. Thank you!`;
}

export function openWhatsApp(message: string): void {
  const encoded = encodeURIComponent(message);
  window.open(`https://wa.me/${WA_NUMBER}?text=${encoded}`, '_blank');
}
