export default function TablePages() {
  return (
    <div className="w-[680px] overflow-x-auto py-6">
      <table className="border border-[#21252926] text-center">
        <thead>
          <tr className="border border-[#21252926]">
            <th className="border border-[#21252926] p-4">معدل الاستهلاك</th>
            <th className="border border-[#21252926] p-4">سمك التطبيق</th>
            <th className="border border-[#21252926] p-4">نسب الخلط</th>
            <th className="border border-[#21252926] p-4">العبوة</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-[#21252926] p-4">
              حوالي 2.25 - 2.5 كجم / م 2 يختلف المعدل حسب السطح
            </td>
            <td className="border border-[#21252926] p-4">حوالي 0.5 - 1 مم</td>
            <td className="border border-[#21252926] p-4">
              10.4 لتر ماء نظيف فاتر للشكارة وزن 40 كجم
            </td>
            <td className="border border-[#21252926] p-4">
              ديار ديكور 601 متاح في شكائر 40 كجم
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
