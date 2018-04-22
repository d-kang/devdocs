import React, { Component } from 'react';
import './GraphqlDocs.scss';
import img__fields from '../assets/fields.jpg';
import img__arguments from '../assets/arguments.jpg';
import img__alias from '../assets/alias.jpg';
import img__fragments from '../assets/fragments.jpg';
import img__variables from '../assets/variables.jpg';

const associatedProductsById = {
  1: { name: 'face cream', id: 3 },
  123: { name: 'foot cream', id: 3 },
  234: { name: 'lotion', id: 234 },
  456: { name: 'cream', id: 456 },
  678: { name: 'conditioner', id: 678 },
  1134: { name: 'face lotion', id: 1134 },
  2356: { name: 'hand lotion', id: 2356 },
  1236: { name: 'shampoo', id: 1236 },
  4563: { name: 'perfume', id: 4563 },
  6764: { name: 'soap', id: 6764 },
};

const obj1 = {
  hi: 'whats up',
};
const obj2 = {
  hi: 'whats up',
};
const obj3 = {
  hi: 'whats up',
  hi: { name: 'soap', id: 6764 },
  6764: { name: 'soap', id: 6764 },
};
const array = [];

obj1.hi = 'hello';
array[0] = 25 + 1;

function hi(he, hello) {
  return 'hello';
}

window.localStorage;

const hiii = () => 25 <= 2;

class hi {}

hiii();

const GraphqlDocs = () => (
  <div className="outer__container">
    <section className="left" />
    <main className="inner__container">
      <h1>Graphql</h1>
      <h2>1. Introduction</h2>
      <h2>2. Queries and Mutations</h2>
      <h4>a. Fields</h4>
      <p>
        The GraphQL query language is basically about selecting fields on
        objects.
      </p>
      <img src={img__fields} alt="" />
      <p>1. We start with a special "root" object</p>
      <p>2. We select the hero field on that</p>
      <p>3. For the object returned by hero, we select the name field</p>
      <p>
        <span className="bold">Note:</span> Every GraphQL service defines a set
        of types which completely describe the set of possible data you can
        query on that service. Then, when queries come in, they are validated
        and executed against that schema.
      </p>
      <h4>b. Arguments</h4>
      <img src={img__arguments} alt="" />
      <p>
        Every field on a GraphQL object type can have zero or more arguments
      </p>
      <p>
        All arguments in GraphQL are passed a specific name that is defined at
        the schema level. In this case, the <code>id</code> field has one
        defined argument, <code>ID!</code>.
        <br />
        <code>!</code> means that the field is non-nullable, meaning that the
        GraphQL service promises to always give you a value when you query this
        field. In the type language, we'll represent those with an exclamation
        mark.
      </p>
      <p>
        Arguments can be either required or optional. When an argument is
        optional, we can define a <em>default value</em>
      </p>
      <h4>c. Aliases</h4>
      <p>
        Aliases let you rename the result of a field to anything you want. Ok
        that's cool but...<em>why do we need them?</em> With aliases, we can
        query hero multiple times without fear of it being overridden in the
        result object. Without it, we wouldn't be able to query hero multiple
        times without it being overridden.
      </p>
      <img src={img__alias} alt="" />
      <p>
        In the above example, the two hero fields would have conflicted, but
        since we can alias them to different names, we can get both results in
        one request.
      </p>
      <h4>
        d. Fragments: a small piece or a part, especially when broken from
        something whole
      </h4>
      <p>
        Fragments let you construct sets of fields, and then include them in
        queries where you need to.
      </p>
      <img src={img__fragments} alt="" />
      <p>
        You can see how the above query would be pretty repetitive if the fields
        were repeated. The concept of fragments is frequently used to split
        complicated application data requirements into smaller chunks,
        especially when you need to combine lots of UI components with different
        fragments into one initial data fetch.
      </p>
      <h4>e. Operation Name / Operation Type</h4>
      <p>
        Up until now, we have been using a shorthand syntax where we omit both
        the query keyword and the query name.
      </p>

      <div className="quote">
        <p>
          You'll need to add these optional parts to a GraphQL operation if you
          want to
        </p>
        <ul>
          <li>1. execute something other than a query </li>
          <li>2. pass dynamic variables</li>
        </ul>
      </div>
      <p>
        Here’s an example that includes the keyword query as operation type and
        HeroNameAndFriends as operation name:
      </p>
      <pre className="prettyprint">
        {`query HeroNameAndFriends {
  hero {
    name
    friends {
      name
    }
  }
}`}
      </pre>
      <div className="quote">
        <h4>Operation types</h4>
        <ul>
          <li>1. query</li>
          <li>2. mutation</li>
          <li>3. subscription</li>
        </ul>
        <p>Describes what type of operation you're intending to do.</p>
      </div>
      <p>
        The operation name a.k.a. GraphQL query and mutation names, along with
        fragment names, can be a useful debugging tool on the server side to
        identify different GraphQL requests.
      </p>
      <h4>f. Variables</h4>
      <p>
        So far, we have been writing all of our arguments inside the query
        string. But in most applications, the arguments to fields will be
        dynamic. We can simply pass a different variable rather than needing to
        construct an entirely new query. This is also in general a good practice
        for denoting which arguments in our query are expected to be dynamic -
        we should never be doing string interpolation to construct queries from
        user-supplied values.
      </p>
      <div className="quote">
        <p>When we start working with variables, we need to do three things:</p>
        <ul>
          <li>
            1. Declare <code>$variableName</code> as one of the variables
            accepted by the query
          </li>
          <li>
            2. Replace the static value in the query with{' '}
            <code>$variableName</code>
          </li>
          <li>
            3. Pass <code>variableName: value</code> in the separate,
            transport-specific (usually JSON) variables dictionary
          </li>
        </ul>
      </div>
      <p>Here's what it looks like all together:</p>
      <pre className="prettyprint">
        {`query HeroNameAndFriends($episode: Episode) {
  hero(episode: $episode) {
    name
    friends {
      name
    }
  }
}

// variables
{
  "episode": "JEDI"
}
`}
      </pre>
      <img src={img__variables} alt="" />
      <p>
        <b>i. Variable Definitions</b>
      </p>
      <p>
        The variable definitions are the part that looks like{' '}
        <code>($episode: Episode)</code> in the query above. It works just like
        the argument definitions for a function in a typed language. It lists
        all of the variables, prefixed by <code>$</code>, followed by their
        type, in this case <code>Episode</code>.
      </p>
      <p>
        All declared variables must be either <b>scalars</b>, <b>enums</b>, or{' '}
        <b>input</b> object types. So if you want to pass a complex object into
        a field, you need to know what input type that matches on the server.{' '}
        <i>
          Learn more about <b>input object types</b> on the Schema page.
        </i>
      </p>
      <p>
        Variable definitions can be optional or required. In the case above,
        since there isn't an <code>!</code> next to the <code>Episode</code>{' '}
        type, it's optional. But if the field you are passing the variable into
        requires a non-null argument, then the variable has to be required as
        well.
      </p>
      <p>
        To learn more about the syntax for these variable definitions, it's
        useful to learn the GraphQL schema language. The schema language is
        explained in detail on the Schema page.
      </p>
      <p>
        <b>ii. Default Variables</b>
      </p>
      <p>
        Default values can also be assigned to the variables in the query by
        adding the default value after the type declaration.
      </p>
      <pre className="prettyprint">
        {`query HeroNameAndFriends($episode: Episode = "JEDI") {
  hero(episode: $episode) {
    name
    friends {
      name
    }
  }
}`}
      </pre>
      <p>
        When default values are provided for all variables, you can call the
        query without passing any variables. If any variables are passed as part
        of the variables dictionary, they will override the defaults.
      </p>
      <h4>g. Directives: an official or authoritative instruction.</h4>
      <p>
        A directive can be attached to a field or fragment inclusion, and can
        affect execution of the query in any way the server desires. The core
        GraphQL specification includes exactly two directives, which must be
        supported by any spec-compliant GraphQL server implementation:
      </p>
      <pre className="prettyprint">{`query Hero($episode: Episode, $withFriends: Boolean!) {
  hero(episode: $episode) {
    name
    friends @include(if: $withFriends) {
      name
    }
  }
}

// variables
{
  "episode": "JEDI",
  "withFriends": true
}
`}</pre>
      <br />
      <div className="quote">
        <ul>
          <li>
            @include(if: Boolean) Only include this field in the result if the
            argument is true.
          </li>
          <br />
          <li>@skip(if: Boolean) Skip this field if the argument is true.</li>
        </ul>
      </div>
      <p>
        Directives can be useful to get out of situations where you otherwise
        would need to do string manipulation to add and remove fields in your
        query. Server implementations may also add experimental features by
        defining completely new directives.
      </p>
      <h4>h. Mutations</h4>
      <p>Updating or adding i.e. post put</p>
      <p>A mutation can contain multiple fields, just like a query.</p>
      <p>
        {' '}
        If we send two incrementCredits mutations in one request, the first is
        guaranteed to finish before the second begins
      </p>
      <h4>i. Inline Fragments</h4>
      <p>
        If you are querying a field that returns an interface or a union type,
        you will need to use inline fragments to access data on the underlying
        concrete type.
      </p>
      <p>
        To ask for a field on the concrete type, you need to use an inline
        fragment with a type condition.{' '}
      </p>

      <h2>3. Schemas and Types</h2>
      <h4>a. Type System</h4>
      <h4>b. Type Language</h4>
      <h4>c. Object Types and Fields</h4>
      <h4>d. Arguments</h4>
      <h4>e. The Query and Mutation Types</h4>
      <h4>f. Scalar Types</h4>
      <h4>g. Enumeration Types</h4>
      <h4>h. Lists and Non-Null</h4>
      <h4>i. Interfaces</h4>
      <h4>j. Union Types</h4>
      <h4>k. Input Types</h4>
      <h2>4. Validation</h2>
      <h2>5. Execution</h2>
      <h2>6. Introspection</h2>
      <h2>BEST PRACTICES</h2>
      <h4>Introduction</h4>
      <h4>Thinking in Graphs</h4>
      <h4>Serving over HTTP</h4>
      <h4>Authorization</h4>
      <h4>Pagination</h4>
      <h4>Caching</h4>
    </main>
    <section className="right" />
  </div>
);

export default GraphqlDocs;

function(...rest) {

}
