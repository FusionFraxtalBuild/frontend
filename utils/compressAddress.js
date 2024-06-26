const compressAddress = (address) => {
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
};

export default compressAddress;
