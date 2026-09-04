export const whatsappNumber = "5594991636639";
export const baseMessage = "Olá! Gostaria de solicitar uma demonstração do NBD SYS.";

type ContactDetails = {
  name?: string;
  business?: string;
  phone?: string;
};

export function buildWhatsappHref(details: ContactDetails = {}) {
  const message = [
    baseMessage,
    details.name?.trim() && `Nome: ${details.name.trim()}`,
    details.business?.trim() && `Empresa: ${details.business.trim()}`,
    details.phone?.trim() && `Telefone: ${details.phone.trim()}`,
  ]
    .filter(Boolean)
    .join("\n");

  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}
