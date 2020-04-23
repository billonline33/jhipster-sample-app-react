import React from 'react'

// TODO - Find out prop types to refactor with
interface IWithLayout {
    Component: React.Component;
    Layout: React.Component
    layoutProps: object
}

// TODO - Convert to tsx
const withLayout = (Component, Layout, layoutProps = {}) => {
  const LayoutComponent = props => {
    const { layout } = props
    return (
      <Layout.Context.Provider value={layout}>
        <Layout {...layoutProps}>
          <Component {...props} />
        </Layout>
      </Layout.Context.Provider>
    )
  }

  const componentName = Component.displayName || Component.name || 'Unknown'
  LayoutComponent.displayName = `Layout(${componentName})`

  // Need something to fetch initial props
  return LayoutComponent
}

export default withLayout

