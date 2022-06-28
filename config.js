
var respecConfig = {
    specStatus: "unofficial",
    shortName: 'version-link',
    edDraftURI: "",
    maxTocLevel: 4,
    postProcess: [jumpTo],
    github: {
      repoURL: "https://github.com/bfh/version-link",
      branch: "documentation", // alternative branch
    },
    editors: [{
      name: "Benedikt Hitz-Gamper",
      url: "https://www.bfh.ch",
    },
    {
      name: "Michael Luggen",
      url: "https://www.bfh.ch",
    }]
  };

module.exports = respecConfig
