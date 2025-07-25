module.exports = {
  current: [
    {
      type: "doc",
      label: "Introduction",
      id: "index",
    },
    {
      type: "doc",
      label: "Installation",
      id: "install",
    },
    {
      type: "category",
      label: "Quickstart",
      items: [
        "quickstart/basics/index",
        "quickstart/agent/index",
        "quickstart/ci/index",
        "quickstart/agent/inproject",
        "ci/adopting",
      ],
    },
    {
      type: "doc",
      label: "Examples",
      id: "examples",
    },
    {
      type: "category",
      label: "Features",
      link: {
        type: "doc",
        id: "features/index",
      },
      items: [
        "features/programmability",
        "features/modules",
        "features/shell",
        "features/llm",
        "features/caching",
        "features/debugging",
        "features/services",
        "features/security",
        "features/visualization",
      ],
    },
    {
      type: "category",
      label: "Dagger API",
      link: {
        type: "doc",
        id: "api/index",
      },
      collapsible: true,
      collapsed: true,
      items: [
        "api/types",
        "api/chaining",
        "api/cache-volumes",
        "api/secrets",
        "api/llm",
        "api/terminal",
        "api/engine",
        {
          type: "category",
          label: "Calling the API",
          collapsible: true,
          collapsed: true,
          items: ["api/clients-sdk", "api/clients-cli", "api/clients-http"],
        },
        {
          type: "category",
          label: "Extending the API with Custom Functions",
          collapsible: true,
          collapsed: true,
          items: [
            "api/custom-functions",
            "api/arguments",
            "api/return-values",
            "api/ide-integration",
            "api/default-paths",
            "api/module-dependencies",
            "api/packages",
            "api/services",
            "api/fs-filters",
            "api/remote-repositories",
            "api/documentation",
            "api/error-handling",
            "api/constructors",
            "api/enumerations",
            "api/interfaces",
            "api/custom-types",
            "api/state",
          ],
        },
        {
          type: "category",
          label: "Working with Modules",
          collapsible: true,
          collapsed: true,
          items: [
            "api/module-structure",
            "api/remote-modules",
            "api/module-tests",
            "api/daggerverse",
            {
              type: "link",
              label: "Module Configuration File Reference",
              href: "https://docs.dagger.io/reference/dagger.schema.json",
            },
            {
              type: "link",
              label: "Engine Configuration File Reference",
              href: "https://docs.dagger.io/reference/engine.schema.json",
            },
          ],
        },
        {
          type: "category",
          label: "API and SDKs Reference",
          collapsible: true,
          collapsed: true,
          items: [
            "api/internals",
            {
              type: "link",
              label: "API Reference",
              href: "https://docs.dagger.io/api/reference",
            },
            {
              type: "link",
              label: "Go SDK Reference",
              href: "https://pkg.go.dev/dagger.io/dagger",
            },
            {
              type: "link",
              label: "PHP SDK Reference",
              href: "https://docs.dagger.io/reference/php",
            },
            {
              type: "link",
              label: "Python SDK Reference",
              href: "https://dagger-io.readthedocs.org/",
            },
            {
              type: "doc",
              label: "TypeScript SDK Reference",
              id: "reference/typescript/modules",
            },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Integrations",
      link: {
        type: "doc",
        id: "ci/integrations/index",
      },
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: "category",
          label: "CI",
          link: {
            type: "doc",
            id: "ci/integrations/ci",
          },
          collapsible: true,
          collapsed: true,
          items: [
            "ci/integrations/argo-workflows",
            "ci/integrations/aws-codebuild",
            "ci/integrations/azure-pipelines",
            "ci/integrations/circleci",
            "ci/integrations/github-actions",
            "ci/integrations/gitlab",
            "ci/integrations/jenkins",
            "ci/integrations/tekton",
          ],
        },
        {
          type: "category",
          label: "Container Runtimes",
          link: {
            type: "doc",
            id: "ci/integrations/container-runtimes",
          },
          collapsible: true,
          collapsed: true,
          items: [
            "ci/integrations/kubernetes",
            "ci/integrations/nerdctl",
            "ci/integrations/openshift",
            "ci/integrations/podman",
            "ci/integrations/apple-container",
          ],
        },
        "ci/integrations/github",
        "ci/integrations/google-cloud-run",
      ],
    },
    {
      type: "category",
      label: "Configuration",
      link: {
        type: "doc",
        id: "configuration/index",
      },
      collapsible: true,
      collapsed: true,
      items: [
        "configuration/engine",
        "configuration/llm",
        "configuration/custom-runner",
        "configuration/custom-ca",
        "configuration/proxy",
        "configuration/cloud",
        "configuration/modules",
        "configuration/cache",
      ],
    },
    {
      type: "doc",
      label: "Cookbook",
      id: "cookbook/cookbook",
    },
    {
      type: "doc",
      label: "CLI Reference",
      id: "reference/cli",
    },
    {
      type: "doc",
      id: "faq",
    },
    {
      type: "doc",
      id: "troubleshooting",
    },
    {
      type: "doc",
      id: "contributing",
    },
    {
      type: "link",
      label: "Documentation Archive",
      href: "https://archive.docs.dagger.io",
    },
    {
      type: "link",
      label: "Changelog",
      href: "https://github.com/dagger/dagger/blob/main/CHANGELOG.md",
    },
  ],
};
