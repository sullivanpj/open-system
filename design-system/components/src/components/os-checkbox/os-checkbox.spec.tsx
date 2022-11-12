import { newSpecPage } from "@stencil/core/testing";
import { OsCheckbox } from "./os-checkbox";

describe("os-checkbox", () => {
  it("renders", async () => {
    const { root } = await newSpecPage({
      components: [OsCheckbox],
      html: "<os-checkbox></os-checkbox>",
    });
    expect(root).toEqualHtml(`
      <os-checkbox>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </os-checkbox>
    `);
  });

  it("renders with values", async () => {
    const { root } = await newSpecPage({
      components: [OsCheckbox],
      html: `<os-checkbox first="Stencil" last="'Don't call me a framework' JS"></os-checkbox>`,
    });
    expect(root).toEqualHtml(`
      <os-checkbox first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </os-checkbox>
    `);
  });
});
