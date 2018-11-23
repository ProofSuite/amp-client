import { getConnectionDomain } from '../domains';

export default function selector(state) {
  return getConnectionDomain(state);
}
