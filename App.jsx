import {
  LayoutDashboard,
  FilePlus,
  Map,
  Lightbulb
} from "lucide-react"
const handleAnalyze = () => {
  alert("AI analysis started")
}
<button className="analyze-btn" onClick={handleAnalyze}>
  Analyze with AI
</button>
function App() {

  return (

    <div className="app">

      <aside className="sidebar">

        <h2>Community Pulse</h2>

        <nav>

  <div className="nav-item active">
    <LayoutDashboard size={18} />
    <span>Dashboard</span>
  </div>

  <div className="nav-item">
    <FilePlus size={18} />
    <span>Report Problem</span>
  </div>

  <div className="nav-item">
    <Map size={18} />
    <span>Community Map</span>
  </div>

  <div className="nav-item">
    <Lightbulb size={18} />
    <span>Insights</span>
  </div>

   </nav>

      </aside>


      <main className="main-content">
        <div className="top-header">

  <div>
    <h2>Community Pulse AI</h2>
    <p>Governance Intelligence Dashboard</p>
  </div>

  <div className="ai-status">
    <span></span>
    AI Active
  </div>

   
   </div>

        <h1>Community Dashboard</h1>

        <p>AI-powered community issue intelligence</p>


        <div className="stats">

          <div className="stat-card">
            <h3>Total Reports</h3>
            <h2>128</h2>
            <p>Community reports received</p>
          </div>

          <div className="stat-card">
            <h3>Emerging Issues</h3>
            <h2>12</h2>
            <p>Issues showing increasing activity</p>
          </div>

          <div className="stat-card">
            <h3>Critical Issues</h3>
            <h2>5</h2>
            <p>Require immediate attention</p>
          </div>

          <div className="stat-card">
            <h3>People Affected</h3>
            <h2>2,450</h2>
            <p>Potentially affected citizens</p>
          </div>

        </div>


        <div className="section">

          <div className="section-header">
            <h2>Emerging Community Issues</h2>
            <p>Issues showing unusual activity</p>
          </div>


          <div className="issues">

            <div className="issue-card">

              <div>
                <h3>Water Supply Disruption</h3>
                <p>17 related reports detected</p>
              </div>

              <span className="high">HIGH</span>

            </div>


            <div className="issue-card">

              <div>
                <h3>Waste Collection Delay</h3>
                <p>9 related reports detected</p>
              </div>

              <span className="medium">MEDIUM</span>

            </div>


            <div className="issue-card">

              <div>
                <h3>Road Damage Cluster</h3>
                <p>7 related reports detected</p>
              </div>

              <span className="medium">MEDIUM</span>

            </div>

          </div>

        </div>


        <div className="trend-section">

          <div className="section-header">
            <h2>Community Activity Trend</h2>
            <p>Reports received over the last 7 days</p>
          </div>


          <div className="trend-card">

            <div className="bars">

              <div className="bar-item">
                <div className="bar" style={{ height: "35%" }}></div>
                <span>Mon</span>
              </div>

              <div className="bar-item">
                <div className="bar" style={{ height: "45%" }}></div>
                <span>Tue</span>
              </div>

              <div className="bar-item">
                <div className="bar" style={{ height: "52%" }}></div>
                <span>Wed</span>
              </div>

              <div className="bar-item">
                <div className="bar" style={{ height: "68%" }}></div>
                <span>Thu</span>
              </div>

              <div className="bar-item">
                <div className="bar" style={{ height: "78%" }}></div>
                <span>Fri</span>
              </div>

              <div className="bar-item">
                <div className="bar" style={{ height: "88%" }}></div>
                <span>Sat</span>
              </div>

              <div className="bar-item">
                <div className="bar" style={{ height: "100%" }}></div>
                <span>Sun</span>
              </div>

            </div>


            <div className="trend-insight">

              <strong>AI Insight</strong>

              <p>
                Community reports are increasing. Water-related reports
                are contributing significantly to the recent activity.
              </p>

            </div>

          </div>

        </div>


        <div className="map-section">

          <div className="section-header">

            <h2>Community Issue Map</h2>

            <p>
              Detected issue clusters across the community
            </p>

          </div>


          <div className="map-card">

            <div className="map-area">

              <div className="map-grid"></div>


             <div className="map-point point-one" onClick={() => alert("Water Supply Disruption\n17 related reports\nPriority: HIGH")}>
                <span>17</span>

                   </div>

                   <div className="map-point point-two" onClick={() => alert("Water Supply Disruption\n9 related reports\nPriority: MEDIUM")}>
                <span>9</span>
                </div>


             <div className="map-point point-three" onClick={() => alert("Water Supply Disruption\n7 related reports\nPriority: MEDIUM")}>
                  <span>7</span>
                     </div>

                     <div className="map-point point-four" onClick={() => alert("Water Supply Disruption\n4 related reports\nPriority: LOW")}>
                        <span>4</span>
                          </div>
                          </div>

                 
                  <div className="map-legend">

              <div>
                <span className="legend-dot critical"></span>
                Critical
              </div>

              <div>
                <span className="legend-dot emerging"></span>
                Emerging
              </div>

              <div>
                <span className="legend-dot stable"></span>
                Stable
              </div>

            </div>

          </div>

        </div>
        <div className="ai-priority-section">

  <div className="section-header">
    <h2>AI Priority Insight</h2>
    <p>Why this issue needs attention</p>
  </div>

  <div className="priority-card">

    <div>
      <span className="priority-label">HIGH PRIORITY</span>

      <h3>Water Supply Disruption</h3>

      <p>
        AI detected a rapid increase in related reports
        across multiple community locations.
      </p>
    </div>

    <div className="priority-score">
      <strong>87</strong>
      <span>Priority Score</span>
    </div>

  </div>

  </div>
  <div className="report-section">

  <div className="section-header">
    <h2>Report a Community Problem</h2>
    <p>Submit an issue for AI-powered analysis</p>
  </div>

  <div className="report-card">

    <div className="form-group">
      <label>Problem Title</label>
      <input
        type="text"
        placeholder="Example: Water supply is not available"
      />
    </div>

    <div className="form-group">
      <label>Problem Description</label>
      <textarea
        placeholder="Describe the problem..."
        rows="4"
      ></textarea>
    </div>

    <div className="form-row">

      <div className="form-group">
        <label>Location</label>
        <input
          type="text"
          placeholder="Enter area or locality"
        />
      </div>

      <div className="form-group">
        <label>Category</label>

        <select>
          <option>Select category</option>
          <option>Water Supply</option>
          <option>Waste Management</option>
          <option>Road Damage</option>
          <option>Electricity</option>
          <option>Other</option>
        </select>

      </div>

    </div>

    <button className="analyze-btn">
      Analyze with AI
    </button>

     </div>

    </div>
       <div className="analysis-section">

  <div className="section-header">
    <h2>AI Analysis Result</h2>
    <p>Structured insight generated from community reports</p>
  </div>

  <div className="analysis-card">

    <div className="analysis-item">
      <span>Detected Issue</span>
      <strong>Water Supply Disruption</strong>
    </div>

    <div className="analysis-item">
      <span>Related Reports</span>
      <strong>17 reports</strong>
    </div>

    <div className="analysis-item">
      <span>Issue Status</span>
      <strong className="status-high">High Priority</strong>
    </div>

    <div className="analysis-item">
      <span>AI Recommendation</span>
      <p>
        Multiple related reports indicate an emerging water
        supply issue that may require local attention.
      </p>
    </div>

  </div>

    
    </div>
    <div className="reports-section">

  <div className="section-header">
    <h2>Recent Community Reports</h2>
    <p>Latest issues submitted by citizens</p>
  </div>

  <div className="reports-card">

    <div className="report-item">
      <div>
        <h3>Water supply stopped</h3>
        <p>Rajendra Nagar • 10 minutes ago</p>
      </div>

      <span className="report-category">Water</span>
    </div>

    <div className="report-item">
      <div>
        <h3>Garbage collection delayed</h3>
        <p>Arera Colony • 25 minutes ago</p>
      </div>

      <span className="report-category">Waste</span>
    </div>

    <div className="report-item">
      <div>
        <h3>Large pothole on main road</h3>
        <p>Kolar Road • 42 minutes ago</p>
      </div>

      <span className="report-category">Road</span>
    </div>

    <div className="report-item">
      <div>
        <h3>Street light not working</h3>
        <p>MP Nagar • 1 hour ago</p>
      </div>

      <span className="report-category">Electricity</span>
    </div>

  </div>
  
     </div>
     <div className="pipeline-section">

  <div className="section-header">
    <h2>AI Processing Pipeline</h2>
    <p>How Community Pulse converts reports into actionable insights</p>
  </div>

  <div className="pipeline-card">

    <div className="pipeline-step">
      <div className="pipeline-number">1</div>
      <h3>Community Report</h3>
      <p>Citizen submits an issue</p>
    </div>

    <div className="pipeline-arrow">→</div>

    <div className="pipeline-step">
      <div className="pipeline-number">2</div>
      <h3>AI Classification</h3>
      <p>AI identifies the issue type</p>
    </div>

    <div className="pipeline-arrow">→</div>

    <div className="pipeline-step">
      <div className="pipeline-number">3</div>
      <h3>Issue Clustering</h3>
      <p>Related reports are grouped</p>
    </div>

    <div className="pipeline-arrow">→</div>

    <div className="pipeline-step">
      <div className="pipeline-number">4</div>
      <h3>Priority Insight</h3>
      <p>AI highlights important issues</p>
    </div>

  </div>

  </div>   
    <div className="system-status-section">

  <div className="section-header">
    <h2>AI System Status</h2>
    <p>Current status of Community Pulse intelligence services</p>
  </div>

  <div className="status-grid">

    <div className="status-card">
      <div className="status-dot online"></div>
      <div>
        <h3>AI Classification</h3>
        <p>Operational</p>
      </div>
    </div>

    <div className="status-card">
      <div className="status-dot online"></div>
      <div>
        <h3>Issue Clustering</h3>
        <p>Operational</p>
      </div>
    </div>

    <div className="status-card">
      <div className="status-dot online"></div>
      <div>
        <h3>Trend Detection</h3>
        <p>Monitoring</p>
      </div>
    </div>

  </div>

    </div>

      </main>

    </div>

  )

}


export default App;