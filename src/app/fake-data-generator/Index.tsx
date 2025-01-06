'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { faker } from '@faker-js/faker';
import { Copy, Plus, Trash2 } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

type GeneratedData = {
  [key: string]: string;
};

const Index = () => {
  const [fields, setFields] = useState([
    'name',
    'email',
    'phone',
    'address',
    'password',
    'website',
  ]);
  const [data, setData] = useState<GeneratedData[]>([]);
  const [count, setCount] = useState(1);

  const pathname = usePathname();

  const addField = () => {
    setFields([...fields, '']);
  };

  const handleFieldChange = (index: number, value: string) => {
    const newFields = [...fields];
    newFields[index] = value;
    setFields(newFields);
  };

  const deleteField = (index: number) => {
    if (fields.length > 2) {
      const newFields = fields.filter((_, i) => i !== index);
      setFields(newFields);
    }
  };

  const generateData = () => {
    const newData = Array.from({ length: count }, () => {
      return fields.reduce((acc: GeneratedData, field) => {
        switch (field) {
          case 'name':
            acc[field] = faker.name.fullName();
            break;
          case 'email':
            acc[field] = faker.internet.email().toLocaleLowerCase();
            break;
          case 'phone':
            acc[field] = faker.phone.number({ style: 'national' });
            break;
          case 'address':
            acc[field] = faker.address.streetAddress();
            break;
          case 'company':
            acc[field] = faker.company.name();
            break;
          case 'jobTitle':
            acc[field] = faker.name.jobTitle();
            break;
          case 'username':
            acc[field] = faker.internet.userName();
            break;
          case 'password':
            acc[field] = faker.internet.password();
            break;
          case 'website':
            acc[field] = faker.internet.url();
            break;
          case 'bio':
            acc[field] = faker.lorem.sentence();
            break;
          default:
            acc[field] = faker.word.noun();
            break;
        }
        return acc;
      }, {});
    });
    localStorage.setItem('user-random-data', JSON.stringify(newData));
    setData(newData);
  };

  useEffect(() => {
    if (pathname === '/random-data') {
      const data = JSON.parse(localStorage.getItem('user-random-data')!);
      setData(data);
      setCount(data?.length || 1);
    } else {
      localStorage.removeItem('user-random-data');
    }
  }, [pathname]);

  return (
    <div>
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-semibold tracking-tight">
          Generate Fake User Data
        </h3>
        <div className="flex items-center gap-2 mt-2">
          <Input
            type="number"
            value={count}
            onChange={(e) => setCount(Number(e.target.value))}
            placeholder="Number of entries"
            min="1"
          />
          <Button size={'sm'} onClick={generateData}>
            Generate
          </Button>
        </div>
      </div>
      <div className="mt-4 p-2 space-y-2 overflow-y-scroll max-h-96">
        {fields.map((field, index) => (
          <div key={index} className="flex items-center gap-2">
            <Input
              value={field}
              onChange={(e) => handleFieldChange(index, e.target.value)}
              placeholder="Enter field name"
            />
            {index >= 2 && (
              <Button
                size={'sm'}
                onClick={() => deleteField(index)}
                className="bg-red-400 hover:bg-red-500 text-white"
              >
                <Trash2 />
              </Button>
            )}
          </div>
        ))}
        <Button onClick={addField} size={'sm'} className="text-xs">
          <Plus /> Add Field
        </Button>
      </div>
      <div className="mt-4">
        <h3 className="text-xl">Generated Data</h3>
        <pre className="p-3 rounded mt-1 overflow-y-scroll max-h-96 bg-sidebar-accent relative">
          <code className="whitespace-pre-wrap">
            {JSON.stringify(data, null, 2)}
          </code>
          <Copy
            className="absolute top-2 right-2 cursor-pointer"
            onClick={() => navigator.clipboard.writeText(JSON.stringify(data))}
          />
        </pre>
      </div>
    </div>
  );
};

export default Index;
