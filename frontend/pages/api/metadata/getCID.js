import { NFTStorage, File } from 'nft.storage';
import fs from 'fs/promises';

async function storeMetadata() {
  try {
    const token = process.env.TOKEN;

    if (!token) {
      throw new Error('API token is missing. Set the TOKEN environment variable.');
    }

    const client = new NFTStorage({ token });

    // Read the contents of metadata.json
    const metadataContents = await fs.readFile('./metadata.json', 'utf-8');

    // Create the metadata object
    const metadata = {
      name: 'Ecomarket',
      description: metadataContents, // Use the contents of metadata.json as the description
    };

    // Create a File object for the image
    const imageFile = new File([await fs.readFile('../../../../5a63.png')], '5a63.png', {
      type: 'image/png',
    });

    // Store the data on NFT.storage
    const result = await client.store({
      ...metadata,
      image: imageFile,
    });

    console.log('Metadata CID:', result.data);
    console.log('Metadata URL:', result.url);
  } catch (error) {
    console.error('Error uploading metadata to NFT.storage:', error.message);
  }
}

storeMetadata();
