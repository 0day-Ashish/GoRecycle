import { Pinecone } from '@pinecone-database/pinecone';

const pc = new Pinecone({
  apiKey: 'pcsk_4kdtsD_6vNNBBKSngvJHJjKEuDEy4HUvkKqo3fc1hBtmJLqtjUBRfR3ZjzvgEZNVAZDCbr'
});
const index = pc.index('quickstart');