import { useState } from 'react'
import './Internship.css'

const days = [
  {
    n: '01',
    accent: 'rust',
    title: "Resistors, Ohm's Law, KCL & KVL",
    subtitle: 'Dr. Anand — HOD ECE, IIIT Kottayam',
    tags: ['Network Theory', 'Resistors', "Ohm's Law", 'Kirchhoff'],
    blocks: [
      {
        label: 'Course Overview',
        body: (
          <p>
            Core areas covered: <strong>Network Theory</strong>, <strong>Circuits & Networks</strong>,{' '}
            <strong>Basic Electronics</strong>, and <strong>Rectification</strong>. Real-world example:
            understanding the hardware inside a heart-rate monitor.
          </p>
        ),
      },
      {
        label: 'Rectification & Inside the Charger',
        body: (
          <>
            <p>
              Studied the internal components of a charger — a full-wave rectifier passing through a{' '}
              <strong>bridge rectifier</strong> to produce half-wave output, then filtered through{' '}
              <strong>RC, RLC, or LC filters</strong> (R = Resistance, L = Inductance, C = Capacitor).
            </p>
            <div className="callout tip">
              <div className="callout-label">Key Insight</div>
              <div className="callout-text">
                <strong>RC filter</strong> is the most efficient. Output starts as fluctuating DC, converted
                by the rectifier into actual DC. A <strong>potential / voltage divider</strong> (e.g.,
                12V → 5V) works using resistances.
              </div>
            </div>
          </>
        ),
      },
      {
        label: 'Resistors',
        body: (
          <>
            <p>
              A resistor <strong>doesn't have polarity</strong> — it's a two-terminal device measured in
              ohms. Modern electronics uses surface-mount resistors on boards.
            </p>
            <p className="scribble">Resistor Color Code: B B R O Y G B V G W — S G</p>
            <div className="color-band">
              <span style={{ background: '#000', color: '#fff' }}>B</span>
              <span style={{ background: '#964B00', color: '#fff' }}>B</span>
              <span style={{ background: '#f00', color: '#fff' }}>R</span>
              <span style={{ background: '#ff8c00', color: '#fff' }}>O</span>
              <span style={{ background: '#ff0', color: '#000' }}>Y</span>
              <span style={{ background: '#0f0', color: '#000' }}>G</span>
              <span style={{ background: '#00f', color: '#fff' }}>B</span>
              <span style={{ background: '#8B00FF', color: '#fff' }}>V</span>
              <span style={{ background: '#808080', color: '#fff' }}>G</span>
              <span style={{ background: '#fff', color: '#000' }}>W</span>
            </div>
            <div className="callout">
              <div className="callout-label">Series & Parallel</div>
              <div className="callout-text">
                <strong>Series:</strong> current is same, voltage differs. R_total = R₁ + R₂ + …<br />
                <strong>Parallel:</strong> voltage is same, current differs. 1/R_total = 1/R₁ + 1/R₂ + …
              </div>
            </div>
          </>
        ),
      },
      {
        label: "Ohm's Law",
        body: (
          <div className="callout formula">
            <div className="callout-label">⚡ Formula</div>
            <div className="callout-text">
              V = R × I &nbsp;(at constant temperature)
              <br />
              <br />
              Ammeter → connected in <strong>Series</strong>
              <br />
              Voltmeter → connected in <strong>Parallel</strong>
            </div>
          </div>
        ),
      },
      {
        label: "Kirchhoff's Laws",
        body: (
          <>
            <div className="callout formula">
              <div className="callout-label">KCL — Kirchhoff's Current Law</div>
              <div className="callout-text">Total current entering a node = total current leaving the node.</div>
            </div>
            <div className="callout formula">
              <div className="callout-label">KVL — Kirchhoff's Voltage Law</div>
              <div className="callout-text">Total voltage rise across a closed loop = total voltage drop.</div>
            </div>
          </>
        ),
      },
      {
        label: 'Voltage & Current Divider Rules',
        body: (
          <>
            <div className="callout">
              <div className="callout-label">Voltage Divider</div>
              <div className="callout-text">
                V(R₁) = R₁ / (R₁ + R₂) × V_total<br />
                Example: 12V → 5V using two resistors
              </div>
            </div>
            <div className="callout">
              <div className="callout-label">Current Divider</div>
              <div className="callout-text">Works inversely — verify theoretically and practically using simulators.</div>
            </div>
          </>
        ),
      },
      {
        label: 'Advanced Analysis (Afternoon)',
        body: (
          <p>
            Topics covered post-lunch (1:00 PM): <strong>Nodal Analysis</strong>,{' '}
            <strong>Super-Mesh Analysis</strong>, <strong>Super-Node Analysis</strong>,{' '}
            <strong>Superposition Principle</strong>, and various <strong>Network Theorems</strong>.
          </p>
        ),
      },
      {
        exercises: [
          'Use online simulators or virtual labs to verify circuit behaviour',
          'Practice resistor colour-code identification',
          'Calculate effective resistance in series & parallel circuits with currents',
          "Solve problems on Ohm's Law, KCL, KVL, CDR, VDR (try with ChatGPT and simulators)",
        ],
      },
    ],
  },
  {
    n: '02',
    accent: 'rust',
    title: 'Diodes & Rectifiers',
    subtitle: 'Dr. Anand — HOD ECE, IIIT Kottayam',
    tags: ['Diodes', 'Rectifiers', 'Applications'],
    blocks: [
      {
        label: 'Diodes',
        body: (
          <p>
            Studied the <strong>V–I characteristics</strong> of a diode — how current flows in forward bias
            and gets blocked in reverse bias. Explored using a <strong>diode as a switch</strong> in
            circuits.
          </p>
        ),
      },
      {
        label: 'Rectifiers',
        body: (
          <p>
            Built understanding of <strong>half-wave rectifiers</strong> and{' '}
            <strong>full-wave rectifiers</strong> — how diodes convert AC to pulsating DC. Explored bridge
            rectifier configurations.
          </p>
        ),
      },
      {
        label: 'Other Applications',
        body: (
          <p>
            Explored additional uses: <strong>clamper circuits</strong> and{' '}
            <strong>switch regulators</strong>. These are critical in power-supply design and signal
            conditioning.
          </p>
        ),
      },
      {
        exercises: [
          'Plot the V–I characteristics of a diode',
          'Demonstrate diode as a switch',
          'Build a half-wave rectifier circuit',
          'Explain how a diode works in a full-wave rectifier',
          'Research clamper and switch-regulator circuits',
        ],
      },
      { scribble: 'Session wrapped up at 12:30 PM' },
    ],
  },
  {
    n: '03',
    accent: 'gold',
    title: 'Computer Networks & VS Code Setup',
    subtitle: 'Session 1 & 2 — IIIT Kottayam',
    tags: ['IEEE 802.3', 'IEEE 802.11', 'Data Comm', 'Dev Setup'],
    blocks: [
      {
        label: 'Session 1 — Dev Environment Setup',
        body: (
          <p>
            Installed <strong>VS Code</strong> inside a virtual machine for coding and programming. Set up
            the workspace for future lab sessions.
          </p>
        ),
      },
      {
        label: 'Session 2 — Computer Networks',
        body: (
          <p>
            Introduction to basic concepts of computer networks. Covered <strong>IEEE 802.3</strong>{' '}
            (Ethernet) and <strong>IEEE 802.11</strong> (Wi-Fi) standards — their basics and connection
            types.
          </p>
        ),
      },
      {
        label: 'Data Communications',
        body: (
          <>
            <p>
              Explored the <strong>five components</strong> of data communication:
            </p>
            <div className="concept-grid">
              {[
                ['Sender', 'The device that sends the data message, using protocols to structure it.', 'rust'],
                ['Medium', 'The physical path by which the message travels from sender to receiver.', 'gold'],
                ['Message', 'The information (data) to be communicated.', 'sage'],
                ['Receiver', 'The device that receives the message, using protocols to decode it.', 'rust'],
                ['Protocol', 'The set of rules governing data communication between sender and receiver.', 'gold'],
              ].map(([h, p, c]) => (
                <div className={`concept-card c-${c}`} key={h}>
                  <h5>{h}</h5>
                  <p>{p}</p>
                </div>
              ))}
            </div>
          </>
        ),
      },
    ],
  },
  {
    n: '04',
    accent: 'sage',
    title: 'IoT Fundamentals & M2M Applications',
    subtitle: 'Shajulin Sir — 13/04/2026',
    tags: ['IoT', 'M2M', 'Smart Systems', 'Research'],
    blocks: [
      {
        label: 'Popular M2M Applications',
        body: (
          <div className="concept-grid">
            {[
              ['🏥 Healthcare', 'Health and wellbeing monitoring systems'],
              ['🏠 Smart Homes', 'Intelligent wearable security systems'],
              ['🏭 IIoT', 'Logistics and cargo handling operations'],
              ['🚗 ITS', 'Automated traffic-control solutions'],
              ['🛒 Smart Retail', 'Asset management, tracking, smart displays'],
              ['💳 Smart Payments', 'Cash payment and inventory management'],
            ].map(([h, p]) => (
              <div className="concept-card c-sage" key={h}>
                <h5>{h}</h5>
                <p>{p}</p>
              </div>
            ))}
          </div>
        ),
      },
      {
        label: 'IoT Subsets',
        body: (
          <table className="data-table">
            <thead>
              <tr>
                <th>Subset</th>
                <th>Focus Area</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['IIoT', 'Industrial — smart factories, logistics'],
                ['CIoT', 'Consumer — wearables, gadgets'],
                ['Space-IoT', 'Overcoming terrestrial coverage limitations'],
                ['IoM', 'Internet of Mirrors — beauty & healthcare'],
                ['IIoMT', 'Intelligent Internet of Medical Things'],
                ['NSAIoT', 'Neuro-symbolic AI + IoT for trustworthiness'],
                ['ITS', 'AI-driven traffic, road safety, pedestrian prediction'],
              ].map(([s, f]) => (
                <tr key={s}>
                  <td>
                    <strong>{s}</strong>
                  </td>
                  <td>{f}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ),
      },
      {
        label: 'Research Domains & Challenges',
        body: (
          <p>
            Key challenge: achieving a <strong>trustworthy IoT ecosystem</strong> through advanced AI
            integration. Major application domains include <strong>Smart Cities</strong>,{' '}
            <strong>Smart Agriculture</strong>, and <strong>Smart Assisted Living</strong> — including
            special suits with integrated clothing that connects to mobile devices to monitor personal
            health.
          </p>
        ),
      },
    ],
  },
  {
    n: '05',
    accent: 'rust',
    title: 'IoT Product Ideation — Smart Home & Cybersecurity',
    subtitle: 'Task Session — Day 6 Activity',
    tags: ['Project', 'Smart Home', 'Cybersecurity', 'IoT'],
    blocks: [
      {
        label: 'Task',
        body: (
          <p>
            Design a <strong>real-life product using IoT</strong> — solve a genuine problem by connecting
            it with IoT technology.
          </p>
        ),
      },
      {
        idea: {
          title: 'Smart Home Integrating System with Cybersecurity',
          body: (
            <>
              <p>
                A smart-city solution designed especially for <strong>elderly grandparents</strong> —
                integrating smart home automation with live traffic monitoring and a cybersecurity layer.
                All cameras, gadgets, and smart devices connect to the internet for seamless access.
              </p>
              <p style={{ marginTop: '0.75rem' }}>
                <strong>Key features:</strong> delivery personnel can access home/location easily. If a
                crime occurs, the cyber wing can instantly identify threats.{' '}
                <strong>Emergency SOS</strong> automatically sends alerts to appropriate bureaus. It's a
                plan for the future internet — a truly connected smart city.
              </p>
            </>
          ),
        },
      },
    ],
  },
  {
    n: '06',
    accent: 'gold',
    title: 'History of Electronics & Components',
    subtitle: 'Dr. Vineeth (Wireless Comm.) — 22/05/2026',
    tags: ['IC Evolution', 'Active/Passive', 'Components', 'Tools'],
    blocks: [
      {
        label: 'Evolution of Electronics',
        body: (
          <>
            <p>
              Traced the journey from <strong>vacuum tubes</strong> to modern integrated circuits:
            </p>
            <table className="data-table">
              <thead>
                <tr>
                  <th>Year</th>
                  <th>Milestone</th>
                  <th>Key Figure(s)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1904</td>
                  <td>Electrode Tube / Vacuum Tube</td>
                  <td>John Fleming</td>
                </tr>
                <tr>
                  <td>1906</td>
                  <td>Vacuum Triode (first transistor concept)</td>
                  <td>Lee De Forest</td>
                </tr>
                <tr>
                  <td>1947</td>
                  <td>Transistor invented → era of semiconductors</td>
                  <td>Bardeen, Brattain, Shockley (Bell Labs)</td>
                </tr>
                <tr>
                  <td>1957</td>
                  <td>Integrated Circuit (IC) demonstrated</td>
                  <td>Jack Kilby</td>
                </tr>
                <tr>
                  <td>—</td>
                  <td>SSI → MSI → VLSI → ULSI (Moore's Law)</td>
                  <td>Intel 4004 (4-bit microprocessor)</td>
                </tr>
              </tbody>
            </table>
          </>
        ),
      },
      {
        label: 'Active & Passive Devices',
        body: (
          <div className="callout">
            <div className="callout-label">Key Distinction</div>
            <div className="callout-text">
              <strong>Passive:</strong> cannot amplify — Resistor (resists electron flow, Ω), Capacitor
              (stores electric field, blocks DC, passes AC — Farad), Inductor (stores magnetic field, blocks
              AC, passes DC — Henry).
              <br />
              <br />
              <strong>Active:</strong> can amplify / process signals — Transistors, Diodes. Classified into
              tube devices and semiconductor devices.
            </div>
          </div>
        ),
      },
      {
        label: 'Lab Tools & Equipment',
        body: (
          <div className="concept-grid">
            {[
              ['Breadboard', 'For simple circuit prototyping'],
              ['PCB', 'For complex circuits, components on both sides'],
              ['Multimeter', 'Measure voltage, current, resistance'],
              ['Function Generator', 'Generate test signals'],
              ['DSO', 'Digital Storage Oscilloscope — visualize signals'],
              ['Soldering Kit', 'Iron, flux, lead, cutter, wires'],
            ].map(([h, p]) => (
              <div className="concept-card c-gold" key={h}>
                <h5>{h}</h5>
                <p>{p}</p>
              </div>
            ))}
          </div>
        ),
      },
      {
        label: 'Impact of Electronics',
        body: (
          <p>
            Explored applications in <strong>21st-century industry</strong>, communication & entertainment,
            the medical field, and defence. <strong>Digital electronics</strong> is especially important
            for IoT — computers run on binary (1, 0).
          </p>
        ),
      },
    ],
  },
  {
    n: '07',
    accent: 'gold',
    title: 'Digital Electronics — Logic Gates & Boolean Algebra',
    subtitle: 'Dr. Vineeth — 22/05/2026 (continued)',
    tags: ['Boolean', 'Logic Gates', 'Number Systems', 'K-Map'],
    blocks: [
      {
        label: 'Analog vs Digital',
        body: (
          <div className="callout">
            <div className="callout-label">Key Difference</div>
            <div className="callout-text">
              <strong>Analog:</strong> sinusoidal signals with infinite possible values — very difficult to
              process.
              <br />
              <strong>Digital:</strong> only two discrete values (0 and 1). Easier to process,
              noise-immune, modular designs possible.
            </div>
          </div>
        ),
      },
      {
        label: 'Advantages of Digital Systems',
        body: (
          <p>
            Noise immunity · power of abstraction · modular designs · faster design completion · software-
            tools ease · programmability.
          </p>
        ),
      },
      {
        label: 'Logic Gates — The Building Blocks',
        body: (
          <>
            <table className="data-table">
              <thead>
                <tr>
                  <th>Gate</th>
                  <th>Circuit</th>
                  <th>Rule</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>AND</strong>
                  </td>
                  <td>Switches in series</td>
                  <td>Output 1 only if ALL inputs are 1</td>
                </tr>
                <tr>
                  <td>
                    <strong>OR</strong>
                  </td>
                  <td>Switches in parallel</td>
                  <td>Output 1 if ANY input is 1</td>
                </tr>
                <tr>
                  <td>
                    <strong>NOT</strong>
                  </td>
                  <td>Inverter</td>
                  <td>Output is the inverse of input</td>
                </tr>
              </tbody>
            </table>
            <p style={{ marginTop: '0.6rem', fontSize: '0.85rem' }}>
              Other gates: <strong>NAND</strong>, <strong>NOR</strong>, <strong>XOR</strong>,{' '}
              <strong>XNOR</strong>. Digital Trainer Kit uses ICs in{' '}
              <strong>Dual In-Line Package (DIP)</strong>.
            </p>
          </>
        ),
      },
      {
        label: 'Number Systems',
        body: (
          <>
            <p>
              Covered conversions between <strong>Decimal</strong>, <strong>Binary</strong>,{' '}
              <strong>Hexadecimal</strong>, and <strong>Octal</strong>. Also: <strong>1's complement</strong>{' '}
              and <strong>2's complement</strong> for signed numbers.
            </p>
            <div className="callout formula">
              <div className="callout-label">Example: Hex 2A → Decimal</div>
              <div className="callout-text">
                2A → Binary: 0010 1010
                <br />
                Binary → Decimal: 0+0+32+0+8+0+2+0 = <strong>42</strong>
              </div>
            </div>
          </>
        ),
      },
      {
        label: 'Boolean Algebra — Core Laws',
        body: (
          <>
            <table className="data-table">
              <thead>
                <tr>
                  <th>Law</th>
                  <th>AND (·)</th>
                  <th>OR (+)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Identity</td>
                  <td>A · 1 = A</td>
                  <td>A + 0 = A</td>
                </tr>
                <tr>
                  <td>Null</td>
                  <td>A · 0 = 0</td>
                  <td>A + 1 = 1</td>
                </tr>
                <tr>
                  <td>Idempotent</td>
                  <td>A · A = A</td>
                  <td>A + A = A</td>
                </tr>
                <tr>
                  <td>Complement</td>
                  <td>A · A' = 0</td>
                  <td>A + A' = 1</td>
                </tr>
              </tbody>
            </table>
            <div className="callout formula" style={{ marginTop: '0.9rem' }}>
              <div className="callout-label">De Morgan's Theorems</div>
              <div className="callout-text">
                (A + B)' = A' · B'
                <br />
                (A · B)' = A' + B'
              </div>
            </div>
            <div className="callout" style={{ marginTop: '0.6rem' }}>
              <div className="callout-label">Other Laws</div>
              <div className="callout-text">
                <strong>Commutative:</strong> A+B = B+A, A·B = B·A
                <br />
                <strong>Associative:</strong> A+(B+C) = (A+B)+C
                <br />
                <strong>Distributive:</strong> A·(B+C) = A·B + A·C
                <br />
                <strong>Absorption:</strong> A+(A·B) = A
              </div>
            </div>
          </>
        ),
      },
      {
        label: 'Karnaugh Map (K-Map)',
        body: (
          <>
            <p>
              A graphical method to simplify Boolean expressions. Uses <strong>Gray code ordering</strong>{' '}
              so adjacent cells differ by only one variable. Group adjacent 1s (for SOP) or 0s (for POS) to
              eliminate variables.
            </p>
            <div className="callout tip">
              <div className="callout-label">K-Map Rules</div>
              <div className="callout-text">
                Groups must be 1, 2, 4, or 8 cells · rectangular shapes only · largest possible groups ·
                edge cells can wrap around · diagonal cells are NOT adjacent.
              </div>
            </div>
            <p style={{ fontSize: '0.85rem', marginTop: '0.5rem' }}>
              <strong>Don't Care (X):</strong> incomplete specified functions — treat as 0 or 1 to make
              larger groups, reducing gate count.
            </p>
          </>
        ),
      },
    ],
  },
  {
    n: '08',
    accent: 'gold',
    title: 'Combinational Circuits — Adders, MUX, Decoders',
    subtitle: 'Dr. Vineeth — Continued',
    tags: ['Half Adder', 'Full Adder', 'MUX/DEMUX', 'Encoder/Decoder'],
    blocks: [
      {
        label: 'Network Analysis & Synthesis',
        body: (
          <p>
            <strong>Analysis:</strong> given a circuit → find current, voltage, power (KCL, KVL, Mesh,
            Nodal, Superposition, Thevenin, Norton).
            <br />
            <strong>Synthesis:</strong> given a desired function → design the circuit using AND, OR, NOT
            gates (Sum-of-Products form).
          </p>
        ),
      },
      {
        label: 'Half Adder',
        body: (
          <>
            <div className="callout formula">
              <div className="callout-label">Equations</div>
              <div className="callout-text">
                Sum: &nbsp; S = A ⊕ B &nbsp;(XOR)
                <br />
                Carry: C = A · B &nbsp;(AND)
              </div>
            </div>
            <table className="data-table">
              <thead>
                <tr>
                  <th>A</th>
                  <th>B</th>
                  <th>Sum</th>
                  <th>Carry</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>0</td>
                  <td>1</td>
                  <td>1</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>0</td>
                  <td>1</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>1</td>
                  <td>0</td>
                  <td>1</td>
                </tr>
              </tbody>
            </table>
          </>
        ),
      },
      {
        label: 'Full Adder',
        body: (
          <>
            <div className="callout formula">
              <div className="callout-label">Equations</div>
              <div className="callout-text">
                Sum: &nbsp; S = A ⊕ B ⊕ Cᵢₙ
                <br />
                Carry: Cₒᵤₜ = AB + Cᵢₙ(A ⊕ B)
              </div>
            </div>
            <p style={{ fontSize: '0.85rem', marginTop: '0.5rem' }}>
              Built using <strong>two half adders + one OR gate</strong>. Essential for multi-bit
              arithmetic.
            </p>
          </>
        ),
      },
      {
        label: 'Half & Full Subtractor',
        body: (
          <>
            <div className="callout formula">
              <div className="callout-label">Half Subtractor</div>
              <div className="callout-text">
                Difference: D = A ⊕ B
                <br />
                Borrow: &nbsp; Bₒᵤₜ = A' · B
              </div>
            </div>
            <div className="callout formula" style={{ marginTop: '0.5rem' }}>
              <div className="callout-label">Full Subtractor</div>
              <div className="callout-text">
                Difference: D = A ⊕ B ⊕ Bᵢₙ
                <br />
                Borrow: &nbsp; Bₒᵤₜ = A'B + A'Bᵢₙ + BBᵢₙ
              </div>
            </div>
          </>
        ),
      },
      {
        label: 'Multiplexer (MUX) & Demultiplexer (DEMUX)',
        body: (
          <>
            <div className="concept-grid">
              <div className="concept-card c-gold">
                <h5>MUX — Data Selector</h5>
                <p>
                  Many inputs → one output. Uses selection lines. 4:1 MUX: Y = S₁'S₀'I₀ + S₁'S₀I₁ + S₁S₀'I₂
                  + S₁S₀I₃
                </p>
              </div>
              <div className="concept-card c-rust">
                <h5>DEMUX — Data Distributor</h5>
                <p>
                  One input → many outputs. 1:4 DEMUX distributes input D to one of Y₀–Y₃ based on
                  selection.
                </p>
              </div>
            </div>
            <table className="data-table" style={{ marginTop: '0.75rem' }}>
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>MUX</th>
                  <th>DEMUX</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Function</td>
                  <td>Selects one input</td>
                  <td>Selects one output</td>
                </tr>
                <tr>
                  <td>Data Flow</td>
                  <td>Many → One</td>
                  <td>One → Many</td>
                </tr>
                <tr>
                  <td>Use</td>
                  <td>Data selection, TDM</td>
                  <td>Data distribution, memory addressing</td>
                </tr>
              </tbody>
            </table>
          </>
        ),
      },
      {
        label: 'Encoders & Decoders',
        body: (
          <div className="concept-grid">
            <div className="concept-card c-rust">
              <h5>Encoder (8:3)</h5>
              <p>
                2ⁿ inputs → n outputs. Converts active input line to binary code. Priority encoder handles
                multiple active inputs.
              </p>
            </div>
            <div className="concept-card c-sage">
              <h5>Decoder (3:8)</h5>
              <p>
                n inputs → 2ⁿ outputs. Activates exactly one output based on binary input. Used in memory
                addressing & 7-segment displays.
              </p>
            </div>
          </div>
        ),
      },
    ],
  },
  {
    n: '09',
    accent: 'gold',
    title: 'Sequential Logic — Flip-Flops & State Machines',
    subtitle: 'Dr. Vineeth — Continued',
    tags: ['Flip-Flops', 'Counters', 'State Diagrams', 'Sequential'],
    blocks: [
      {
        label: 'Combinational vs Sequential',
        body: (
          <div className="callout">
            <div className="callout-label">Key Difference</div>
            <div className="callout-text">
              <strong>Combinational:</strong> output depends only on present inputs.
              <br />
              <strong>Sequential:</strong> output depends on present inputs + previous states (memory).
            </div>
          </div>
        ),
      },
      {
        label: 'Types of Sequential Circuits',
        body: (
          <div className="concept-grid">
            <div className="concept-card c-gold">
              <h5>Synchronous</h5>
              <p>
                Uses clock signal. State changes at clock pulses. Easier to design. Examples: counters,
                registers, digital clocks.
              </p>
            </div>
            <div className="concept-card c-rust">
              <h5>Asynchronous</h5>
              <p>
                No clock. State changes immediately on input change. Faster but complex. Examples: ripple
                counters.
              </p>
            </div>
          </div>
        ),
      },
      {
        label: 'Flip-Flops — Memory Elements',
        body: (
          <table className="data-table">
            <thead>
              <tr>
                <th>Type</th>
                <th>Inputs</th>
                <th>Behaviour</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>SR</strong>
                </td>
                <td>S, R</td>
                <td>Set / Reset. S=R=1 is invalid.</td>
              </tr>
              <tr>
                <td>
                  <strong>JK</strong>
                </td>
                <td>J, K</td>
                <td>Improved SR. J=K=1 → Toggle.</td>
              </tr>
              <tr>
                <td>
                  <strong>D</strong>
                </td>
                <td>D</td>
                <td>Stores input directly. D=0 → Q=0, D=1 → Q=1.</td>
              </tr>
              <tr>
                <td>
                  <strong>T</strong>
                </td>
                <td>T</td>
                <td>Toggle. T=0 → no change, T=1 → toggle.</td>
              </tr>
            </tbody>
          </table>
        ),
      },
      {
        label: 'Design Steps for Sequential Circuits',
        body: (
          <ol className="numbered-steps">
            <li>Understand the problem — identify inputs, outputs, and states.</li>
            <li>
              Draw the <strong>state diagram</strong> (circles = states, arrows = transitions).
            </li>
            <li>
              Create the <strong>state table</strong> (present state → next state).
            </li>
            <li>
              Perform <strong>state assignment</strong> (binary codes to states).
            </li>
            <li>Choose flip-flop type (D is simplest).</li>
            <li>
              Derive flip-flop input equations using <strong>K-Maps</strong>.
            </li>
            <li>
              Draw the final <strong>logic circuit diagram</strong>.
            </li>
          </ol>
        ),
      },
      {
        label: 'State Assignment Methods',
        body: (
          <p style={{ fontSize: '0.9rem' }}>
            <strong>Binary:</strong> states in binary order · <strong>Gray Code:</strong> one bit change
            between adjacent states · <strong>One-Hot:</strong> each state uses one flip-flop.
          </p>
        ),
      },
      {
        callout: {
          kind: 'tip',
          label: 'Design Tip',
          text: 'State reduction minimizes hardware by combining equivalent states. This reduces flip-flop count and simplifies the overall design.',
        },
      },
    ],
  },
  {
    n: '10',
    accent: 'sage',
    title: 'Microprocessors & Microcontrollers in IoT',
    subtitle: 'Dr. Delly Thomas — Day 10',
    tags: ['Microprocessors', 'Microcontrollers', 'IoT', 'Embedded'],
    blocks: [
      {
        label: 'Session Focus',
        body: (
          <p>
            Introduced the difference between general-purpose microprocessors and embedded microcontrollers,
            and explained why microcontrollers are the preferred building blocks for IoT edge devices.
          </p>
        ),
      },
      {
        label: 'Microprocessor vs Microcontroller',
        body: (
          <div className="concept-grid">
            <div className="concept-card c-sage">
              <h5>Microprocessor</h5>
              <p>
                CPU only. Requires external memory, I/O controllers, and support chips. Suited for desktop
                computers and systems that need high compute flexibility.
              </p>
            </div>
            <div className="concept-card c-rust">
              <h5>Microcontroller</h5>
              <p>
                Single-chip embedded system with CPU, RAM, flash, and peripherals. Ideal for IoT sensors,
                actuators, and battery-powered devices.
              </p>
            </div>
          </div>
        ),
      },
      {
        label: 'Embedded IoT Architecture',
        body: (
          <>
            <p>
              Studied the typical IoT node architecture: <strong>sensors</strong> → <strong>MCU</strong> →
              <strong>communication interface</strong> → <strong>cloud/actions</strong>. The MCU bridges the
              physical world with data and automation.
            </p>
            <div className="callout">
              <div className="callout-label">Key Interfaces</div>
              <div className="callout-text">
                GPIO, ADC, PWM, UART, SPI, I2C, and wireless modules connect microcontrollers to sensors,
                displays, motors, and networks.
              </div>
            </div>
          </>
        ),
      },
      {
        label: 'IoT Use Case',
        body: (
          <p>
            Designed an example temperature-monitoring IoT node: the microcontroller reads a sensor, processes
            data, and forwards results through a wireless interface for cloud logging and alerting.
          </p>
        ),
      },
      {
        label: 'Programming & Power',
        body: (
          <p>
            Reviewed firmware concepts such as <strong>interrupts</strong>, <strong>timers</strong>, and
            <strong>low-power modes</strong> — essential for reliable, battery-friendly IoT systems.
          </p>
        ),
      },
      {
        exercises: [
          'Compare a microprocessor-based system with a microcontroller-based IoT node',
          'Draw an MCU block diagram showing sensors, communication, and power',
          'List common embedded interfaces: GPIO, SPI, I2C, UART, ADC',
          'Explain why microcontrollers are preferred for edge IoT applications',
        ],
      },
    ],
  },
  {
    n: '11',
    accent: 'rust',
    title: 'Keil, Proteus and SIM8085 Practicals',
    subtitle: 'Dr. Delly Thomas (Continued)',
    tags: ['Keil', 'Proteus', 'SIM8085', 'Practicals', 'Tools'],
    blocks: [
      {
        label: 'Session Overview',
        body: (
          <p>
            Hands-on practical session focusing on three critical embedded development tools:
            <strong>Keil µVision</strong>, <strong>Proteus Design Suite</strong>, and{' '}
            <strong>SIM8085 simulator</strong>. These tools are essential for microprocessor/microcontroller
            design, simulation, and verification.
          </p>
        ),
      },
      {
        label: 'Keil µVision IDE',
        body: (
          <>
            <p>
              Industry-standard IDE for <strong>ARM Cortex-M</strong> microcontroller development. Provides
              complete environment for:
            </p>
            <div className="concept-grid">
              <div className="concept-card c-rust">
                <h5>Code Editor</h5>
                <p>Write C/Assembly code with syntax highlighting, debugging symbols, and optimizations.</p>
              </div>
              <div className="concept-card c-gold">
                <h5>Compiler/Assembler</h5>
                <p>Convert source code to machine code. Generates optimized object files for embedded targets.</p>
              </div>
              <div className="concept-card c-sage">
                <h5>Linker & Debugger</h5>
                <p>Combine modules, manage memory layout. Debug via breakpoints, watch windows, and trace.</p>
              </div>
            </div>
            <div className="callout" style={{ marginTop: '0.75rem' }}>
              <div className="callout-label">Project Structure in Keil</div>
              <div className="callout-text">
                <strong>Project</strong> → <strong>Target</strong> → <strong>Source Files</strong> (C,
                Assembly) + <strong>Header Files</strong> + <strong>Libraries</strong>. Keil handles
                compilation, optimization flags, and device-specific configurations.
              </div>
            </div>
          </>
        ),
      },
      {
        label: 'Proteus Design Suite',
        body: (
          <>
            <p>
              Comprehensive EDA (Electronic Design Automation) platform for circuit design and mixed-signal
              simulation. Integrates virtual instruments and real-time processor simulation.
            </p>
            <table className="data-table">
              <thead>
                <tr>
                  <th>Module</th>
                  <th>Purpose</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>ARES</strong>
                  </td>
                  <td>PCB Layout design tool — place components, route traces, manage layers</td>
                </tr>
                <tr>
                  <td>
                    <strong>ISIS/VSMDL</strong>
                  </td>
                  <td>Schematic capture and virtual simulation — test circuits before hardware</td>
                </tr>
                <tr>
                  <td>
                    <strong>VSM</strong>
                  </td>
                  <td>Virtual System Modeling — simulate microcontrollers (8051, PIC, AVR, ARM)</td>
                </tr>
                <tr>
                  <td>
                    <strong>Virtual Instruments</strong>
                  </td>
                  <td>Oscilloscope, multimeter, logic analyzer, frequency generators</td>
                </tr>
              </tbody>
            </table>
            <div className="callout tip" style={{ marginTop: '0.75rem' }}>
              <div className="callout-label">Workflow in Proteus</div>
              <div className="callout-text">
                Design schematic → Connect MCU + sensors/actuators → Load compiled firmware (HEX file from
                Keil) → Simulate behavior → Verify output with virtual instruments.
              </div>
            </div>
          </>
        ),
      },
      {
        label: 'SIM8085 Simulator',
        body: (
          <>
            <p>
              Dedicated simulator for the <strong>Intel 8085 microprocessor</strong> — an 8-bit processor
              widely used in educational labs. Perfect for learning microprocessor architecture and
              assembly programming fundamentals.
            </p>
            <div className="concept-grid">
              <div className="concept-card c-rust">
                <h5>Register Set</h5>
                <p>
                  8-bit general-purpose registers: A, B, C, D, E, H, L. Special registers: SP (Stack
                  Pointer), PC (Program Counter), Flags.
                </p>
              </div>
              <div className="concept-card c-gold">
                <h5>Addressing Modes</h5>
                <p>
                  Immediate, Register, Direct, Indirect, Register Indirect — each supported with dedicated
                  instructions.
                </p>
              </div>
              <div className="concept-card c-sage">
                <h5>Memory Visualization</h5>
                <p>Step through code, inspect memory, observe register changes in real-time during execution.</p>
              </div>
            </div>
            <div className="callout" style={{ marginTop: '0.75rem' }}>
              <div className="callout-label">Example 8085 Assembly Program</div>
              <div className="callout-text">
                <code style={{ fontSize: '0.8rem', display: 'block', whiteSpace: 'pre-wrap' }}>
                  {`MVI A, 05H      ; Load 05 into Accumulator
MVI B, 03H      ; Load 03 into B
ADD B           ; A = A + B (result: 08H)
HLT             ; Halt execution`}
                </code>
              </div>
            </div>
          </>
        ),
      },
      {
        label: 'Practical Workflow',
        body: (
          <>
            <p>
              <strong>Scenario:</strong> Design a temperature sensor interfacing with an ARM microcontroller
              that displays readings on an LCD.
            </p>
            <table className="data-table">
              <thead>
                <tr>
                  <th>Step</th>
                  <th>Tool</th>
                  <th>Activity</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>
                    <strong>Keil</strong>
                  </td>
                  <td>Write firmware: ADC configuration, sensor reading, LCD display code</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                    <strong>Keil</strong>
                  </td>
                  <td>Compile code → generate HEX file with memory layout optimization</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    <strong>Proteus</strong>
                  </td>
                  <td>Design circuit: MCU + temperature sensor (analog) + LCD module</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>
                    <strong>Proteus</strong>
                  </td>
                  <td>Load HEX file into virtual MCU → simulate sensor readings → verify LCD output</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>
                    <strong>All</strong>
                  </td>
                  <td>Debug: fix code, update HEX, re-simulate until behavior is correct</td>
                </tr>
              </tbody>
            </table>
          </>
        ),
      },
      {
        exercises: [
          'Create a simple Keil project: write C code to blink an LED using GPIO',
          'Compile the project and examine the generated HEX/ELF files and memory map',
          'Design a Proteus circuit: MCU + push button + LED, load the HEX file, simulate button press',
          'Write an 8085 assembly program in SIM8085: add two numbers, store result in memory',
          'Step through the 8085 program, observe register and memory changes',
          'Practice debugging techniques: breakpoints, watch windows, single-stepping',
        ],
      },
      { scribble: 'Hands-on session concluded with tool proficiency assessment' },
    ],
  },
]

function DayCard({ day, defaultOpen }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <article className={`day-card accent-${day.accent} ${open ? 'open' : ''}`}>
      <button className="day-header" onClick={() => setOpen(o => !o)} aria-expanded={open}>
        <span className="day-number">Day {day.n}</span>
        <div className="day-meta">
          <div className="day-title">{day.title}</div>
          <div className="day-subtitle">{day.subtitle}</div>
          <div className="day-tags">
            {day.tags.map(t => (
              <span className={`day-tag ${day.accent}`} key={t}>
                {t}
              </span>
            ))}
          </div>
        </div>
        <span className="day-toggle" aria-hidden>+</span>
      </button>
      <div className="day-body">
        <div className="day-content">
          {day.blocks.map((b, i) => {
            if (b.exercises) {
              return (
                <div className="exercise-box" key={i}>
                  <ol>
                    {b.exercises.map(e => (
                      <li key={e}>{e}</li>
                    ))}
                  </ol>
                </div>
              )
            }
            if (b.scribble) {
              return (
                <p className="scribble" key={i}>
                  {b.scribble}
                </p>
              )
            }
            if (b.idea) {
              return (
                <div className="idea-card" key={i}>
                  <h4>{b.idea.title}</h4>
                  {b.idea.body}
                </div>
              )
            }
            if (b.callout) {
              return (
                <div className={`callout ${b.callout.kind || ''}`} key={i}>
                  <div className="callout-label">{b.callout.label}</div>
                  <div className="callout-text">{b.callout.text}</div>
                </div>
              )
            }
            return (
              <div className="topic-block" key={i}>
                {b.label && <div className="topic-label">{b.label}</div>}
                {b.body}
              </div>
            )
          })}
        </div>
      </div>
    </article>
  )
}

export default function Internship() {
  return (
    <main className="internship-page page-enter">
      <section className="intern-hero">
        <div className="intern-hero-bg" />
        <div className="container intern-hero-inner">
          <div className="section-label" style={{ marginBottom: '1.5rem' }}>
            PM VIKAS · Daily Class Journal · 2026
          </div>
          <div className="intern-badge">
            <span className="badge-dot" />
            <span>Basics of Electronics · IIIT Kottayam</span>
          </div>
          <h1 className="intern-title">
            PM <em>Vikas</em>
            <br />
            Class Journal
          </h1>
          <p className="intern-subtitle">
            Working as an IoT Assistant Intern for the Pradhan Mantri Vishwakarma Kaushal Samman programme —
            learning electronics from scratch, building connected systems, and documenting every lesson
            along the way. Each day below opens to the full notes, formulas, and exercises.
          </p>
          <div className="intern-tags">
            <span className="tag gold">10 Sessions Logged</span>
            <span className="tag sage">Electronics & Circuits</span>
            <span className="tag rust">Digital Logic</span>
            <span className="tag">IoT & Networks</span>
          </div>
        </div>
      </section>

      <section className="journal-section">
        <div className="container">
          <div className="journal-heading">
            <span className="journal-num">DAILY LOG</span>
            <h2 className="journal-title">
              Class <em>Journal</em>
            </h2>
          </div>

          <div className="timeline-rail">
            {days.map((d, i) => (
              <DayCard day={d} key={d.n} defaultOpen={i === 0} />
            ))}
          </div>
        </div>
      </section>

      <section className="scheme-info">
        <div className="container scheme-grid">
          <div>
            <div className="section-label" style={{ marginBottom: '1rem' }}>
              About the Programme
            </div>
            <h2 className="section-h2">
              What is <em>PM VIKAS?</em>
            </h2>
            <p>
              PM Vishwakarma Kaushal Samman is a Central Sector Scheme by the Government of India
              supporting traditional craftsmen, artisans, and emerging technologists. The IoT vertical at
              IIIT Kottayam runs an intensive Basics-of-Electronics curriculum spanning network theory,
              digital logic, microprocessors, IoT architecture, and data communication.
            </p>
            <ul className="scheme-list">
              <li>Network theory — KCL, KVL, mesh & nodal analysis</li>
              <li>Analog & digital circuits, rectifiers, diodes</li>
              <li>Boolean algebra, K-maps, combinational logic</li>
              <li>Sequential logic — latches, flip-flops, FSMs</li>
              <li>Microprocessors & embedded systems</li>
              <li>Data communication & IoT applications</li>
            </ul>
          </div>
          <div className="scheme-aside">
            <div className="aside-card">
              <h4>My Role</h4>
              <p>
                IoT Assistant Intern — attending labs and theory sessions, documenting every class, and
                applying the material to small IoT product concepts.
              </p>
            </div>
            <div className="aside-card">
              <h4>Faculty</h4>
              <p>Dr. Anand (HOD ECE), Dr. Vineeth (Wireless Comm.), Shajulin Sir (IoT).</p>
            </div>
            <div className="aside-card">
              <h4>Location</h4>
              <p>IIIT Kottayam, Kerala.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
