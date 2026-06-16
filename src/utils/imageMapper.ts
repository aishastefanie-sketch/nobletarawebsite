/**
 * Maps villa asset filenames to stunning, high-resolution luxury real-estate photos.
 * Keeps the site looking professional and highly polished in the live preview.
 */
export const imageMapping: { [key: string]: string } = {
  'nightpoolvilla.jpeg': 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80', // Luxury villa twilight
  'nightpool.jpeg': 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1200&q=80', // Twilight infinity pool
  'entrance.jpeg': 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80', // Modern entry foyer
  'walkway.jpeg': 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80', // Green pathway/walkway
  'dayterrace.jpeg': 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80', // Sunlit terrace deck
  'overheadterrace.jpeg': 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80', // Balcony courtyard view
  'sideexterior.jpeg': 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80', // Lush exterior garden wall
  'frontexterior.jpeg': 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80', // Elegant front facade
  'reverseentrance.jpeg': 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80', // Reverse entrance facade
  'livingroom.jpeg': 'https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=1200&q=80', // Artisan warm interior
  'widelivingroom.jpeg': 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=80', // Floor-to-ceiling glass lounge
  'kitchen.jpeg': 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80', // Modern luxury kitchen
  '1stfloorstairs.jpeg': 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1000&q=80', // Sculpted stairs
  '2ndfloorstairs.jpeg': 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=80', // Skylight staircase view
  'masterbedroom.jpeg': 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80', // Grand bedroom suite
  'masterbedroombath.jpeg': 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1200&q=80', // Japanese bath oasis
  'guestroom2.jpeg': 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80', // Guest room suite
  '2ndfloorbathroom.jpeg': 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80', // Elegant bathroom tiles
  '1stfloorbathroom.jpeg': 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=80', // Luxury marble bath
  'entranceexterior.jpeg': 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=1200&q=80', // Glass corridor shadows
  'overheadpool.jpeg': 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80', // Royal overhead pool scene
  'groundfloorplan.jpeg': 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80', // Beautiful modern blueprints design
  'secondfloorplan.jpeg': 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80', // High-fidelity architect scale house design
  'neighborhood.jpeg': 'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&fit=crop&w=1200&q=80', // Beautiful prestige residential gated street
};

// Store detected local assets at runtime
export async function detectLocalImages(): Promise<void> {
  // Local check handled by Vite transformIndexHtml
}

declare global {
  interface Window {
    __LOCAL_FILES__?: string[];
  }
}

/**
 * Resolves local image name to the local physical file (if uploaded),
 * otherwise falls back to its matched Unsplash asset,
 * with a reliable fallback URL if the mapping is missed.
 */
export function resolveImage(filename: string): string {
  const localFiles = window.__LOCAL_FILES__ || [];
  if (localFiles.includes(filename)) {
    return `/${filename}`;
  }
  return imageMapping[filename] || `/${filename}`;
}
