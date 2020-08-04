import React from 'react';
// Import `useForm` and `usePlugin`
import { useForm, usePlugin, useCMS } from 'tinacms';
// Import `InlineForm`
import { InlineForm, InlineBlocks } from 'react-tinacms-inline';
import { heroBlock } from './components/Hero';
import { imagesBlock } from './components/Images';
import { paragraphBlock } from './components/Paragraph';
import { featureListBlock } from './components/FeatureList';
import data from './data/data.json';

export default function Home() {
  const cms = useCMS();

  // Create a config object
  const formConfig = {
    id: './data/data.json',
    initialValues: data,
    onSubmit() {
      cms.alerts.success('Saved!');
    },
  };

  // Create and register the form.
  const [pageData, form] = useForm(formConfig);
  usePlugin(form);

  // Use the return data now connected with a TinaCMS form
  return (
    // Wrap `InlineForm` around `Hero`, pass the form
    <InlineForm form={form}>
      <InlineBlocks name="blocks" blocks={HOME_BLOCKS} />
    </InlineForm>
  );
}

const HOME_BLOCKS = {
  hero: heroBlock,
  images: imagesBlock,
  paragraph: paragraphBlock,
  features: featureListBlock,
};
