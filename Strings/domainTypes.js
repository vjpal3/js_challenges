// For domains = ["en.wiki.org", "codesignal.com", "happy.net", "code.info"], the output should be
// domainType(domains) = ["organization", "commercial", "network", "information"].

function domainType(domains) {
  const description = {
    org: 'organization',
    com: 'commercial',
    net: 'network',
    info: 'information'
  };

  return domains.map(domain => {
    let toplevelDomain = domain.slice(domain.lastIndexOf('.') + 1);
    return description[toplevelDomain];
  });
}
